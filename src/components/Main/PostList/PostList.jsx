import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"

const PostList = () => {

	const { posts } = useContext(PostListContext)


	return (

		<div className="row row-cols-3 mx-5 " >

			{posts.length ? posts.map((post, i) => {
				return (
					<PostItem
						key={post.id}
						index={i}
						id={post.id}
						topic={post.topic}
						image={post.image}
						input={post.input}
						tags={post.tags}
					/>
				)
			}) : <p>В данный момент ваша лента пуста</p>
			}
		</div>

	)
}

export default PostList