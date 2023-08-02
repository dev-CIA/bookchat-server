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
  messages.push({ role: sender, content: content });

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: chatMessages,
  });
  let bookchat = completion.data.choices[0].message['content'];
  chatMessages.push({ role: 'assistant', content: bookchat });
  console.log(chatMessages);
  res.send(bookchat);
});

module.exports = router;
