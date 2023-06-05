import { styled } from "styled-components";
import BookmarkImg from "../assets/Bookmark.svg";
import BookmarkClickedImg from "../assets/BookmarkClicked.svg";
import { useState } from "react";
function CardMobile({ thumbnailSrc, logoSrc, title, desc, date }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <Card>
      <Thumbnail src={thumbnailSrc} />
      <Contents>
        <Logo src={logoSrc} />
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <BottomContainer>
          <Date>{date}</Date>
          {isBookmarked ? (
            <Bookmark
              src={BookmarkClickedImg}
              onClick={() => {
                setIsBookmarked(!isBookmarked);
              }}
            />
          ) : (
            <Bookmark
              src={BookmarkImg}
              onClick={() => {
                setIsBookmarked(!isBookmarked);
              }}
            />
          )}
        </BottomContainer>
      </Contents>
    </Card>
  );
}
export default CardMobile;

const Card = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const Thumbnail = styled.img`
  width: 82px;
  height: 125px;
  border-radius: 6px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 6px;
  object-fit: cover;
`;
const Contents = styled.div`
  margin-left: 16px;
  margin-right: 6px;
  margin-right: 21px;
`;
const Logo = styled.img`
  height: 14px;
  margin-top: 20px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  color: #1a2254;
  margin-top: 14px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Desc = styled.p`
  font-weight: 350;
  font-size: 13px;
  line-height: 1;
  color: #484e76;
  margin-top: 8px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const Date = styled.p`
  font-weight: 350;
  font-size: 12px;
  line-height: 1;
  color: #1a2254;
`;
const Bookmark = styled.img`
  width: 10px;
  height: 14px;
`;
