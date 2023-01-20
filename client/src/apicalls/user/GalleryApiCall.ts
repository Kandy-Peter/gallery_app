import {  deleteData, getData, postOrPatchDataWithFormData } from "../ApiCallSetup"

export const CreateGalleryApiCall = async(credentials:FormData):Promise<JSON> =>
{
   const addedUrl:string = 'gallery/create_gallery'; 

   return postOrPatchDataWithFormData(credentials,addedUrl,'POST').then((data:any)=>
   {
     return data;

   }).catch((error:any)=>
  {
      return error;
  });

}




export const GetGalleryApiCall = async(page:number):Promise<JSON> =>
{
  const addedUrl:string = 'gallery/list_gallery/?page='+page; 

  return getData(addedUrl).then((data:any)=>
  {
    return data;
  }).catch((error:any)=>
  {
    return error;
  });

}



export const deleteGalleryApiCall = async(id:number):Promise<JSON> =>
{
  const addedUrl:string = 'gallery/delete/'+id; 

 return deleteData(addedUrl).then((data:any)=>
 {
   return data;
 }).catch((error:any)=>{
   return error;
 })

}


export const editGalleryApiCall = async(id:string|Blob,credentials:FormData)=>
{
  const addedUrl:string = "gallery/update_gallery/"+id;

  return postOrPatchDataWithFormData(credentials,addedUrl,'PATCH').then((data:any)=>{
    return data;
  }).catch((error:any)=>{
    return error;
  });

}


