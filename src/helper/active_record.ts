import { isPlatform } from "@ionic/vue";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

export class ActiveRecordService  {
  protected endpoint!: string
  public primaryKey = 'id'
  public primaryKeyValue: any
  public isNew = true

  public items: any[] = []
  public errors: {[key: string]: []} = {}

  public timeout = 20000;

  protected pagination = {
    current_page: null,
    from: null,
    last_page: null,
    per_page: null,
    to: null,
    total: null,
    links: []
  }

  protected params: Map<string, any> = new Map()
  public formData: FormData = new FormData();

  public sort = {
    column: 'id',
    order: 'ASC', 
  }

  protected after?: CallableFunction
  protected before?: CallableFunction

  public constructor(
    public attributes: { [key: string]: any } = {}
  ) { }

  public getUrl(): string {
    if (isPlatform('hybrid') || isPlatform('mobileweb')) {
      return `${process.env.VUE_APP_API_URL_SSL}/api/${this.endpoint}`
    }
    return `${process.env.VUE_APP_API_URL}/api/${this.endpoint}`
  }

  protected getParams(): any {
    let params: { [key: string]: any } = {};

    for (const key of this.params.keys()) {
      if ([null, undefined, 'null', 'undefined', '', '{}'].includes(this.params.get(key))) {
        this.params.delete(key);
      } else {
        params[key] = this.params.get(key);
      }
    }

    return params;
  }

  public from(endpoint: string): ActiveRecordService {
    this.endpoint = endpoint;

    return this;
  }

  public select(select: string[]): ActiveRecordService {
    this.params = this.params.set('only', select.join(','));

    return this;
  }

  public where(
    column: string,
    operator: '=' | 'not' | 'between' | 'gte' | 'lte' | 'like',
    value: string
  ): ActiveRecordService {
    const finalOperator =
      operator == null || operator == '=' ? '' : `_${operator}`;

    this.params = this.params.set(`${column}${finalOperator}`, value);

    return this;
  }

  public whereIn(
    column: string,
    values: string[],
  ): ActiveRecordService {
    this.params = this.params.set(`${column}`, values.join(','));

    return this;
  }

  public whereRelation(
    relation: string,
    column: string,
    value: string[]
  ): ActiveRecordService {
    let query: any;

    if (this.params.has('has')) {
      query = JSON.parse(this.params.get('has'));
    } else {
      query = {};
    }
    

    if (value.includes('')) {
      query[`${relation}.${column}`] = undefined;
    } else {
      query[`${relation}.${column}`] = value;
    }

    this.params = this.params.set('has', JSON.stringify(query));

    return this;
  }

  public whereNull(column: string): ActiveRecordService {
    this.params = this.params.set(`${column}_null`, true);

    return this;
  }

  public whereNotNull(column: string): ActiveRecordService {
    this.params = this.params.set(`${column}_not_null`, true);

    return this;
  }

  public orderBy(column: string, order?: 'ASC' | 'DESC'): ActiveRecordService {
    if (order) {
      this.sort.order = order;
    } else if (this.sort.column == column) {
      this.sort.order = this.sort.order == 'ASC' ? 'DESC' : 'ASC'
    } else {
      this.sort.order = 'ASC'
    }
    this.sort.column = column;

    this.params = this.params.set('order_by', `${this.sort.column}:${this.sort.order}`);

    return this;
  }

  public paginate(perPage: number, page: number = 1): ActiveRecordService {
    this.params = this.params.set('per_page', perPage.toString());
    this.params = this.params.set('page', page.toString());

    return this;
  }

  public setPage(perPage: number) {
    this.params = this.params.set('page', perPage.toString());

    return this;
  }

  public getPage(): number {
    return parseInt(this.params.get('page'));
  }

  public setPerPage(page: number) {
    this.params = this.params.set('per_page', page.toString());

    return this;
  }

  public getPerPage(): number {
    return parseInt(this.params.get('per_page'));
  }

  public relations(relations: string[]): ActiveRecordService {
    this.params = this.params.set('with', relations.join(','));

    return this;
  }

  public setBefore(before?: CallableFunction): ActiveRecordService {
    this.before = before;
    return this;
  }

  public setAfter(after?: CallableFunction): ActiveRecordService {
    this.after = after;
    return this;
  }

  public clear(): ActiveRecordService {
    for (let name of Object.keys(this.attributes)) {
      if (Array.isArray(this.attributes[name])) {
        this.attributes[name] = []
      } else {
        this.attributes[name] = null
      }
    }

    this.items = [];

    return this;
  }

  public load(
    id: any,
    success?: CallableFunction,
    failed?: CallableFunction
  ): void {
    if (this.before) {
      this.before()
    }

    axios
      .get(`${this.getUrl()}/${id}`, {
        params: this.getParams()
      })
      .then(response => {
        this.isNew = false;
        this.primaryKeyValue = id
        this.attributes = response.data

        if (this.after) {
          this.after(response)
        }

        if (success) {
          success(response)
        }

        this.errors = {}
      }).catch(error => {
        if (failed) {
          failed(error)
        }

        console.log(error);
      })
  }

  public reload(
    success?: CallableFunction,
    failed?: CallableFunction
  ): void {
    if (this.isNew) {
      this.clear()
    } else {
      this.load(this.primaryKeyValue, success, failed)
    }
  }

  public save(
    success?: CallableFunction,
    failed?: CallableFunction
  ): void {
    let url, method
    const id = (this.attributes as any)[this.primaryKey];

    if (this.isNew) {
      url = this.getUrl()
      method = 'post'
    } else {
      url = `${this.getUrl()}/${id}`
      method = 'patch'
    }

    axios
      [method as 'post' | 'patch'](url, this.attributes)
      .then(response => {
        this.attributes = response.data

        this.errors = {}

        if (success) {
          success(response)
        }
      }).catch(error => {
        this.errors = error.response?.data?.errors || []

        if (failed) {
          failed(error)
        }

        if ([`timeout of ${this.timeout}ms exceeded`, 'Network Error'].includes(error.message)) {
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error de conexión',
            text: 'Por favor verifica que estés conectado a la red, o intenta más tarde.',
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            text: error.message ?? undefined,
          })
        }
  
        console.log(JSON.stringify(error, null, 4))
      })
  }

  public saveFormData(
    success?: CallableFunction,
    failed?: CallableFunction
  ) {
    let url
    const id = (this.attributes as any)[this.primaryKey];

    if (this.isNew) {
      url = this.getUrl()
    } else {
      url = `${this.getUrl()}/${id}`
      this.formData.append('_method', 'PATCH')
    }

    for (let key of Object.keys(this.attributes)) {
      let value = this.attributes[key];

      if (this.attributes[key]) {

        if (value instanceof FileList) {
          for (const [index, file] of Object.entries(value)) {
            this.formData.append(`${key}[${index}]`, file)
          }
        } else {
          this.formData.append(key, value)
        }

      } else {
        this.formData.delete(key)
      }
    }
     
    axios
      .post(
        url,
        this.formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(response => {
        this.attributes = response.data

        if (success) {
          success(response)
        }

        this.errors = {}
      }).catch(error => {
        if (failed) {
          failed(error)
        }

        this.errors = error.response?.data?.errors || [];
      })
  }

  public addFile(
    name: string,
    files: FileList | File
  ): ActiveRecordService {
    if (files instanceof FileList) {
      for (const index in files) {
        this.formData.append(`${name}[${index}]`, files[index])
      }
    } else {
      this.formData.set(name, files)
    }

    return this
  }

  public all(
    success?: CallableFunction,
    failed?: CallableFunction
  ): void {
    if (this.before) {
      this.before()
    }

    axios
    .get(this.getUrl(), {
      params: this.getParams(),
      timeout: this.timeout,
    })
    .then((response: AxiosResponse<any>) => {
      this.items = response.data.data.map((item: { [key: string]: any; }) => {
        const model = new ActiveRecordService(item);
        model
          .from(this.endpoint)
          .isNew = false;

        return model;
      })

      this.pagination = {
        current_page: response.data.current_page,
        from: response.data.from,
        last_page: response.data.last_page,
        per_page: response.data.per_page,
        to: response.data.to,
        total: response.data.total,
        links: response.data.links
      }

      if (this.after) {
        this.after(response)
      }

      if (success) {
        success(response)
      }
    }).catch((error: any) => {
      if (failed) {
        failed(error)
      }

      if (this.after) {
        this.after(error)
      }

      if ([`timeout of ${this.timeout}ms exceeded`, 'Network Error'].includes(error.message)) {
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error de conexión',
          text: 'Por favor verifica que estés conectado a la red, o intenta más tarde.',
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error.',
          text: 'Por favor intenta de nuevo.',
        })
      }

      console.log(JSON.stringify(error, null, 4))
    })
  }

  public delete(
    success?: CallableFunction,
    failed?: CallableFunction
  ): void {
    axios
      .delete(`${this.getUrl()}/${(this.attributes as any)[this.primaryKey]}`)
      .then((response) => {
        if (success) {
          success(response)
        }
      }).catch(error => {
        if (failed) {
          failed(error)
        }

        console.log(error);
      })
  }
}