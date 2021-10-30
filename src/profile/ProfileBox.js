
import CustomTextBox from '../CustomTextbox/CustomTextbox';
import "./ProfileBox.css";

export default function profileBox(props) {

    const { onCommentChange, onKeyDown, commentBoxId, comments, userComment, profileImg, profileName, profileStatus } = props;
    return (
        <>
            <div className="BoxHeader">
                <img
                    className="ProfileImg"
                    alt="img"
                    src={profileImg}
                />
                <span className="ProfileName">{profileName}</span>
            </div>
            <div className="BoxContent">
                <span className="ProfileName">{profileStatus}</span>
            </div>
            <div className="BoxFooter">
                <span className="footerContent">Comment</span>
            </div>
            {commentBoxId === 0 && <CustomTextBox
                profileImg={"https://www.w3schools.com/tags/img_girl.jpg"}
                onCommentChange={onCommentChange}
                comments={comments}
                onKeyDown={onKeyDown}
                userComment={userComment}
            />
            }
        </>

    )
}