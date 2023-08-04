const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const chatMessages = [
  {
    role: 'system',
    content:
      '당신은 책 전문가이다. 모든 책을 다 읽었고, 모든 책의 정보를 명확하게 잘 알고 있다. 모든 책에 대해서 토론할 수 있다. 모든 책에 대한 질문에 명확하게 답할 수 있으며, 책에 대한 감상을 얘기할 수 있다.',
  },
  {
    role: 'user',
    content:
      '당신은 책 전문가이다. 모든 책을 다 읽었고, 모든 책의 정보를 명확하게 잘 알고 있다. 모든 책에 대해서 토론할 수 있다. 모든 책에 대한 질문에 명확하게 답할 수 있으며, 책에 대한 감상을 얘기할 수 있다.',
  },
  {
    role: 'assistant',
    content: '안녕하세요. 저는 책에 관한 토론이 즐거운 북챗입니다. 어떤 책에 대해 얘기해볼까요?',
  },
];

router.post('/chat', async (req, res) => {
  const { content, sender } = req.body;

  if (content === '') return;
  chatMessages.push({ role: sender, content: content });

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: chatMessages,
  });
  let bookchat = completion.data.choices[0].message['content'];
  chatMessages.push({ role: 'assistant', content: bookchat });
  console.log(chatMessages);
  res.send(bookchat);
});

router.post('/recommend', async (req, res) => {
  const { book, weather, mood, other } = req.body;

  let conditionMessage = '이런 조건에 맞는 책을 추천해주세요';
  if (book) conditionMessage += `\n - 좋아하는 책과 저자: ${book}`;
  if (weather) conditionMessage += `\n - 이런 날씨일 때: ${weather}`;
  if (mood) conditionMessage += `\n - 이런 기분일 때: ${mood}`;
  if (other) conditionMessage += `\n - 그리고 다른 조건들: ${other}`;

  conditionMessage +=
    '답변안에 추천하는 책의 정보는 꼭 [{"id":순서, "title":책제목, "author":책저자, "reason":추천 이유}] 의 형식에 반드시 맞춰주세요. 그리고 형식에 맞췄다는 얘기는 금지입니다. "네 알겠습니다"등의 답변도 하지 마세요';

  console.log('cm', conditionMessage);

  const recommendMessages = [
    {
      role: 'system',
      content:
        '당신은 책 전문가이다. 모든 책을 다 읽었고, 모든 책의 정보를 명확하게 잘 알고 있다. 모든 책에 대해서 토론할 수 있다. 모든 책에 대한 질문에 명확하게 답할 수 있으며, 책에 대한 감상을 얘기할 수 있다. 또한 책 추천을 세계 최고로 잘 한다. 기분, 날씨, 분위기, 상황에 따른 책 추천을 무조건 할 수 있다. 좋아하는 책을 말하면 그와 비슷한 책을 추천해 줄 수 있다. 책을 추천해 줄때는 책에 대한 정보와 이유도 명료하고 명확하게 말하며, 한번에 2개의 책을 추천한다. 대답할 때 추천 책에 대한 정보 형식은 정해져 있으며, 무조건 형식에 맞게 대답해야 한다. 형식은 다음과 같다. [{"id":순서, "title":책제목, "author":책저자, "reason":추천 이유}].',
    },
    {
      role: 'user',
      content:
        '당신은 책 전문가이다. 모든 책을 다 읽었고, 모든 책의 정보를 명확하게 잘 알고 있다. 모든 책에 대해서 토론할 수 있다. 모든 책에 대한 질문에 명확하게 답할 수 있으며, 책에 대한 감상을 얘기할 수 있다. 또한 책 추천을 세계 최고로 잘 한다. 기분, 날씨, 분위기, 상황에 따른 책 추천을 무조건 할 수 있다. 좋아하는 책을 말하면 그와 비슷한 책을 추천해 줄 수 있다. 책을 추천해 줄때는 책에 대한 정보와 이유도 명료하고 명확하게 말하며, 한번에 2개의 책을 추천한다. 대답할 때 추천 책에 대한 정보 형식은 정해져 있으며, 무조건 형식에 맞게 대답해야 한다. 형식은 다음과 같다. [{"id":순서, "title":책제목, "author":책저자, "reason":추천 이유}].',
    },
    {
      role: 'assistant',
      content: '안녕하세요. 저는 책 추천도 잘하는 북챗입니다. 원하시는 조건에 따라 책을 추천해드려요!',
    },
    {
      role: 'user',
      content: conditionMessage,
    },
  ];

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: recommendMessages,
  });
  let recommend = completion.data.choices[0].message['content'];
  console.log(recommend);
  res.send(recommend);
});

module.exports = router;
