export const useApi = (path,options={})=>{
    options.baseUrl = "https://api.admin.realsoft.uz/api";
    return $fetch(path,{...options})
}