import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import { useNavigate, useParams } from 'react-router-dom'
import Modal from "../../Modal/Modal"
import ModalInput from "../../Modal/ModalInput/ModalInput"

const DetailPage = () => {

  const { posts } = useContext(PostListContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const dataForPost = posts.find((post) => post.id === +id)
  const { viewModal } = useContext(PostListContext)
  const { openModal } = useContext(PostListContext)
  const { closeModal } = useContext(PostListContext)



  return (
    <>
      <img src={dataForPost.image} className="card-img-top shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '30rem' }} alt='img' />
      <div className="card-body">
        <h5 className="card-title">{dataForPost.topic}</h5>
        <p className="card-text">{dataForPost.input}</p>
        <p>#{dataForPost.tags} </p>
        <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Назад</button>
        <button type="button" onClick={openModal} className="btn btn-success mx-1">Редактировать</button>
      </div>

      <Modal

        state={viewModal}
        onClose={closeModal}>

        <ModalInput
          createSubmit={() => { }}
          {...dataForPost}
        />
      </Modal>
    </>
  )
}

export default DetailPage