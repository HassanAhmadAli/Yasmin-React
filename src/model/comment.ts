/*
user name 
email
comment body
on submission
*/
export interface Comment {
    text: string;
    authorName: string;
    authorId: number;
    date: Date;
    _id: number;
    email:string;
}