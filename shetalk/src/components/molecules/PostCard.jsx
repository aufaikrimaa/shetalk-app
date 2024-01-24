import CommentInput from '../atoms/CommentInput';
import { useState } from 'react';
import Comment from '../atoms/Comment';
import { IconTersimpan, dummyAvatar } from '../../assets';

const PostCard = ({ avatar, nama, tanggal, judul, konten, topik }) => {
  const [showComment, setShowComment] = useState(false);

  const toggleComment = () => {
    setShowComment(!showComment);
  };
  return (
    <>
      {/* tampilan postingan */}
      <div className="p-4 rounded-3 mb-3" id="listKonten">
        <div className="d-flex align-items-center gap-3 mb-3" id="postCard">
          {/* Image */}
          <img src={avatar} alt="Profile" className="rounded-circle" style={{ width: '50px', height: '50px', objectFit: 'cover', }} />
          <div>
            {/* nama, tanggal */}
            <h5 className="mb-0 fw-bold custom-text ">{nama}</h5>
            <p className="mb-0 text-muted">{tanggal}</p>
          </div>
        </div>
        <div>
          {/* judul dan isi content */}
          <h5 className="custom-text fw-semibold">{judul}</h5>
          <span className="custom-btn fw-bold d-inline-flex text-decoration-none text-white active align-items-center px-2 rounded-2">
            {topik}
          </span>
          <span> {konten}</span>
          {/* topik */}
        </div>

        <div className="d-flex mt-4 gap-2 justify-content-end">
          {/* save Icon */}
          <a href="#">
            <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.7917 26.25L17.5 23.0708L10.2083 26.25V7.29167H24.7917M24.7917 4.375H10.2083C9.43478 4.375 8.69291 4.68229 8.14593 5.22927C7.59895 5.77625 7.29166 6.51812 7.29166 7.29167V30.625L17.5 26.25L27.7083 30.625V7.29167C27.7083 6.51812 27.401 5.77625 26.8541 5.22927C26.3071 4.68229 25.5652 4.375 24.7917 4.375Z"
                fill="#888888"
              />
            </svg>
          </a>
          {/* comment Icon */}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              toggleComment();
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="mdi:message-reply">
                <path
                  id="Vector"
                  d="M27.5 5C27.5 4.33696 27.2366 3.70107 26.7678 3.23223C26.2989 2.76339 25.663 2.5 25 2.5H5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V20C2.5 20.663 2.76339 21.2989 3.23223 21.7678C3.70107 22.2366 4.33696 22.5 5 22.5H22.5L27.5 27.5V5Z"
                  fill="#AAAAAA"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>

      {/* tampilan komentar */}
      {showComment && (
        <div id="comment">
          <CommentInput />
          <Comment
            avatar={dummyAvatar}
            nama="anonim"
            time=" 30 menit yang lalu"
            textComment="
          Lama menstruasi yang dianggap normal bervariasi antara setiap individu. Secara umum, siklus menstruasi normal berkisar antara 21 hingga 35 hari, dan durasi menstruasi sendiri biasanya berlangsung selama 2 hingga 7 hari"
          />
          <Comment avatar={dummyAvatar} nama="anonim" time="10 menit yang lalu" textComment="Normalnya 7 hari" />
          <Comment avatar={dummyAvatar} nama="anonim" time="15 menit yang lalu" textComment="3 hari mungkin" />
        </div>
      )}
    </>
  );
};

export default PostCard;