import codeIcon from '../images/code-icon.png';
import hackathon from '../images/hackathon.png';
import hireIcon from '../images/hire-icon.png';
import meetupIcon from '../images/meetup-icon.png';
import teachIcon from '../images/teach-icon.png';
import moneyIcon from '../images/money-icon.png';
import offerIcon from '../images/offer-icon.png';
import techCofounderIcon from '../images/tech-cofounder.png';

const shuffle = array => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

const drawerOptionsDefinition = [
  {
    img: techCofounderIcon,
    text: "Find a cofounder",
    modalHeading: "Need a cofounder?",
    modalBodyFirstSentence: "Sign up for early access & we'll connect you to high quality founders for free."
  },
  {
    img: meetupIcon,
    text: "Find a tech meetup",
    modalHeading: "Find a tech meetup!",
    modalBodyFirstSentence: "Sign up for early access & we'll send you tech meetups that interest you for free."
  },
  {
    img: hackathon,
    text: "Find hackathons",
    modalHeading: "Attend a hackathon?",
    modalBodyFirstSentence: "Sign up for early access & we'll send you hackathons happening near you for free."
  },
  {
    img: teachIcon,
    text: "Teach coding to others",
    modalHeading: "Spread your coding knowledge",
    modalBodyFirstSentence: "Sign up for early access & we'll send you opportunites to spread your hacking chops."
  },
  {
    img: moneyIcon,
    text: "Receive full time position offers",
    modalHeading: "Receive dev position offers?",
    modalBodyFirstSentence: "Sign up for early access & we'll send you open full time dev positions near you for free."
  },
  {
    img: offerIcon,
    text: "Get local contract offers",
    modalHeading: "Attract contract offers?",
    modalBodyFirstSentence: "Sign up for early access & receive leads on contract positions available near you for free."
  }
];

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export { shuffle, drawerOptionsDefinition, isEmailValid }