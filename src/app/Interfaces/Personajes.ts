export interface Personaje{
    id:number | string,
    name:string,
    gender:string,
    location:{
        name:string,
        url:string
    }
    species:string,
    status:string
    image:string
}