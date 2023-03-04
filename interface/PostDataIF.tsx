import { ReactNode } from "react";

export interface PostData {
  readonly title:String,
  readonly data:String,
  readonly blogContentHTML:string
}
export interface AllPostsData{
  id?:String,
  title?:String,
  date?:String,
  thumbnail?: String,
  map:Function,
}