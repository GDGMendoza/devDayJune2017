export class Post {
  _id?: string;
  id?: string;
  categoryId: string;
  tagId: string;
  postStatusId: string;
  text: string;
  dateCreated: string;
  dateUpdated: string;
  createdByUserId: string;
}

export class PostStatus {
  _id?: string;
  id?: string;
  name: string;
  dateCreated: string;
  dateUpdated: string;
  createdByUserId: string;
}
