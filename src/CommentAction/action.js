
import "./action.css";

export default function actions(props) {

    const { onLinkClick, onReplyClick, onShareClick, comments, comment } = props;
    return (
        <p className="commentsLike">
            <span
                className="footerContent"
                onClick={() => onLinkClick(comments, comment)}
            >
                Like {comment.like}
            </span>
            <span className="footerContent" onClick={() => onReplyClick(comments, comment)}>Comment</span>
            <span className="footerContent" onClick={() => onShareClick(comments, comment)}>Share</span>
        </p >
    )
}