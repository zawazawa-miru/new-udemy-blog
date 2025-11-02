export type Post = {
    id: string
    title: string
    content: string
    topImage: String | null
    createdAt: Date
    author : {
        name: string
    }
}

export type PostCardProps = {post: Post}