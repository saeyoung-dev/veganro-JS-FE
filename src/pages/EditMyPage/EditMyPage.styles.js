import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;
const InnerContainer = styled.div`
  width: 100%;
  gap: 15px;
  height: calc(100% - 48px);
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: absolute;
  top: 48px;
`;
const InfoContainer = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TextBox = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  gap: 12px;
  display: flex;
  input {
    transition: all 0.2s ease-in;
    &:focus {
      border-color: ${(props) => props.theme.color.green[500]};
    }
  }
`;

const SubTextBox = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

const Text = styled.div`
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 18px;
  font-weight: 600;
  word-wrap: break-word;
`;

const Card = styled.div`
  width: 100%;
  height: 50px;
  padding: 12px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const TagContainer = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  display: flex;
`;

const Tag = styled.div`
  width: ${(props) => props.width}px;
  padding: 12px;
  border-radius: 100px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const Button = styled.div`
  flex: 1 1 0;
  height: 50px;
  padding: 12px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;
const ButtonContent = styled.div`
  height: 100%;
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const VeganTagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  color: ${(props) => props.theme.color.gray[500]};
`;

const InfomationContainer = styled.div`
  margin: 10px auto;
  width: 100%;
`;

const InfomationImg = styled.img`
  width: 100%;
  height: 300px;
  background-image: url(''https://storage.googleapis.com/elice_04/vegan-ro-img/VeganOptionInfo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export {
  InfomationImg,
  InfomationContainer,
  Container,
  InnerContainer,
  InfoContainer,
  TextBox,
  SubTextBox,
  Text,
  Card,
  TagContainer,
  Tag,
  ButtonContainer,
  Button,
  VeganTagContainer,
  Icon,
  ButtonContent,
};
