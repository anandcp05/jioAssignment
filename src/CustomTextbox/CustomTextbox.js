
import "./CustomTextbox.css";
export default function customTextBox(props) {

    const { profileImg, onCommentChange, onKeyDown, comments, comment, userComment } = props;
    const onChange = (event) => {
        onCommentChange(event)
    }
    return (
        <div className="BoxComment">
            <img
                className="ProfileImg"
                alt="img"
                src={profileImg}
            />
            <input
                className="commentTextBox"
                type="text"
                placeholder="Write Comments"
                name="name"
                value={userComment}
                onChange={onChange}
                onKeyDown={(event) => onKeyDown(event, comments, comment)}
            />
        </div>
    )
}