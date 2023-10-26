import './Thanks.css';
import { BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
 } from 'react-icons/bs';

const Thanks = ({data}) => {

  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    verysatisfied: <BsFillEmojiHeartEyesFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    neutral: <BsFillEmojiNeutralFill/>
  }

  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opnião é muito importante.</p>
        <p>Para concluir a sua avaliação, clique no botão ENVIAR abaixo.</p>
        <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
        <p className="review-data">
          <span>Satisfação: </span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário: </span>
          {data.comment}
        </p>
    </div>
  );
};

export default Thanks