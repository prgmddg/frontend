export default interface msg
{
  show:boolean,
  type?:'fail'|'success'|'alert',
  content?:string,
}