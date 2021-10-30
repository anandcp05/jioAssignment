import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Actions from './CommentAction/action';
import CustomTextBox from './CustomTextbox/CustomTextbox';
import ProfileBox from './profile/ProfileBox';
import { userComments } from './util/sampleData';

export default function App(props) {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [commentBoxId, setCommentBoxId] = useState(0);
  const itemsRef = useRef([]);

  //Function to get and set from local storage
  useEffect(() => {
    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", JSON.stringify(userComments));
    }
    let localComments = JSON.parse(localStorage.getItem("comments"));
    setComments(localComments)
  }, [])

  let ids = []
  //To get Refs
  useEffect(() => {
    getIds(comments)
    itemsRef.current = itemsRef.current.slice(0, ids.length);
  });

  //Scroll to the Given comment 
  useEffect(() => {
    let commentId = window.location.pathname.split('/');
    console.log(window.location)
    commentId = commentId[commentId.length - 1]
    if (itemsRef.current[commentId]) {
      itemsRef.current[commentId].scrollIntoView({ behavior: 'smooth', block: 'start' })
      itemsRef.current[commentId].focus()
    }
  })

  //Get updated comment value
  const onCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  //Function to get ids
  const getIds = (allComments) => {
    for (let i of allComments) {
      ids.push(i.id)
      if (i.replys && i.replys.length > 0) {
        getIds(i.replys);
      }
    }
  }

  //Function to add comments
  const onKeyDown = (event, allComments, comment) => {
    if (event.keyCode === 13) {
      let newComment = {
        id: Math.random()
          .toString()
          .substr(2, 7),
        name: "KB",
        comment: userComment,
        like: 0,
        replys: []
      };
      let newComments = []
      if (comment === undefined) {
        newComments = [...comments];
        newComments.unshift(newComment);
      } else {
        for (let i of allComments) {
          if (i.id === comment.id) {
            i.replys.unshift(newComment);
          } else if (i.replys && i.replys.length > 0) {
            onLike(i.replys, comment);
          }
        }
        newComments = [...comments];
      }
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setUserComment("");
    }
  };
  //Function to cature reply ID
  const onReply = (allComments, comment) => {
    setCommentBoxId(comment.id);
  };
  const onShare = (allComments, comment) => {
    let url = window.location;
    console.log(window.location)
    let link=`${url.origin}/commentId/${comment.id}`
    navigator.clipboard.writeText(link);
    alert(`link Copied-${link}`)
  }

  //Function to increse like count
  const onLike = (allComments, newCommentLikeId) => {
    for (let i of allComments) {
      if (i.id === newCommentLikeId.id) {
        i.like += 1;
      } else if (i.replys && i.replys.length > 0) {
        onLike(i.replys, newCommentLikeId);
      }
    }
    let newComments = [...comments];
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComments(newComments);
  };

  //Function to render the comments
  const renderComments = (comments) => {
    return comments.map((comment) => {
      return (
        <div
          ref={el => { itemsRef.current[comment.id] = el }}
        >
          <div className="BoxComment"
            key={Math.random()
              .toString()
              .substr(2, 7)}
          >
            <img
              className="ProfileImg"
              alt="img"
              src="https://www.w3schools.com/tags/img_girl.jpg"
            />
            <span className="commentProfileName">{comment.name}</span>
            <Actions
              onLinkClick={onLike}
              onReplyClick={onReply}
              onShareClick={onShare}
              comments={comments}
              comment={comment}
            />
            <span className="userComments">{comment.comment}</span>
          </div>
          {comment.id === commentBoxId && (
            <CustomTextBox
              profileImg={"https://www.w3schools.com/tags/img_girl.jpg"}
              onCommentChange={onCommentChange}
              comments={comments}
              comment={comment}
              onKeyDown={onKeyDown}
              userComment={userComment}
            />
          )}
          <div className="childComment">
            {comment.replys && renderComments(comment.replys)}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="Main">
      <div className="App">
        <ProfileBox
          profileImg={"https://www.w3schools.com/tags/img_girl.jpg"}
          profileName="Anand C.P"
          profileStatus="Day is Beautiful"
          onKeyDown={onKeyDown}
          onCommentChange={onCommentChange}
          comments={comments}
          userComment={userComment}
          commentBoxId={commentBoxId}
        />
        <div className="comments">{renderComments(comments)}</div>
      </div>
    </div>
  );
}
