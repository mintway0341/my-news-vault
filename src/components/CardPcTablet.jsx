import { styled } from "styled-components";
import BookmarkImg from "../assets/Bookmark.svg";
import { useState } from "react";
import BookmarkClickedImg from "../assets/BookmarkClicked.svg";
function CardPc({ thumbnailSrc, logoSrc, title, desc, date }) {
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
export default CardPc;

const Card = styled.div`
  width: 231px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #112ebe00;
  &:hover {
    border: 1px solid #112ebe;
    box-shadow: 0px 0px 8px 3px rgba(35, 78, 180, 0.15);
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
  padding-bottom: 24px;
`;
const Thumbnail = styled.img`
  width: 215px;
  height: 138px;
  border-radius: 6px;
  margin: 0px 8px;
`;
const Contents = styled.div`
  margin: 0px 20px;
`;
const Logo = styled.img`
  height: 14px;
  margin-top: 24px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1a2254;
  margin-top: 20px;
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
  font-size: 14px;
  line-height: 21px;
  color: #484e76;
  margin-top: 20px;
  height: 63px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const BottomContainer = styled.div`
  width: 191px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
const Date = styled.p`
  font-weight: 350;
  font-size: 12px;
  line-height: 18px;
  color: #1a2254;
`;
const Bookmark = styled.img`
  cursor: pointer;
  width: 10px;
  height: 14px;
`;
