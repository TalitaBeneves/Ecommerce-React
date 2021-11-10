import { Email, GitHub, Instagram, LinkedIn, Phone, Room } from '@material-ui/icons';
import styled from 'styled-components';
import pay from '../img/payment.png';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
  margin: 20px 0px;
  
`;

const SocialContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 15px;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 40%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Talita</Logo>
        <Desc>There are many variations of  passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</Desc>
        <SocialContainer>
          <SocialIcon color="cf0246">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="004cba">
            <LinkedIn/>
          </SocialIcon>
          <SocialIcon color="000">
            <GitHub/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          Contact
        </Title>
        <ContactItem>
        <Room style={{marginRight:"10px"}}/> Rio de Janeiro
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>21 990497280
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight:"10px"}}/>talitabeneves15@gmail.com
        </ContactItem>
        <Payment src={pay}/>
      </Right>
    </Container>
  )
}

export default Footer
