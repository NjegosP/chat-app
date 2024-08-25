export type MessageType = {
  id: number;
  senderId: number;
  messageText: string;
  isLiked: boolean;
  replyMessage?: MessageType;
};

export type Conversation = {
  id: number;
  messages: MessageType[];
};

export const conversations: Conversation[] = [
  {
    id: 500,
    messages: [
      { id: 200, senderId: 1, messageText: 'Hey, how’s everything going?', isLiked: false },
      {
        id: 201,
        senderId: 2,
        messageText: 'Pretty good! Just finished a big project. How about you?',
        isLiked: true,
      },
      {
        id: 202,
        senderId: 1,
        messageText: 'Nice! I’ve been working on some new ideas. 🚀',
        isLiked: false,
      },
      { id: 203, senderId: 1, messageText: 'Maybe we could collaborate on something?', isLiked: false },
      {
        id: 204,
        senderId: 2,
        messageText: 'That sounds interesting. Let’s discuss it soon.',
        isLiked: false,
      },
      { id: 205, senderId: 2, messageText: 'Are you free next week?', isLiked: false },
      { id: 206, senderId: 1, messageText: 'I should be. I’ll check my calendar.', isLiked: false },
      { id: 207, senderId: 2, messageText: 'Great! Just let me know.', isLiked: false },
      { id: 208, senderId: 1, messageText: 'Will do! Talk to you later.', isLiked: true },
      { id: 209, senderId: 2, messageText: 'Later!', isLiked: false },
      {
        id: 210,
        senderId: 1,
        messageText: 'Hey, did you check out that article I sent?',
        isLiked: false,
      },
      { id: 211, senderId: 2, messageText: 'Not yet, but it’s on my list.', isLiked: false },
      {
        id: 212,
        senderId: 1,
        messageText: 'It’s a good read, I think you’ll like it.',
        isLiked: false,
      },
      { id: 213, senderId: 2, messageText: 'I’ll check it out tonight.', isLiked: false },
      {
        id: 214,
        senderId: 2,
        messageText: 'What’s it about?',
        isLiked: false,
        replyMessage: {
          id: 210,
          senderId: 1,
          messageText: 'Hey, did you check out that article I sent?',
          isLiked: false,
        },
      },
      {
        id: 215,
        senderId: 1,
        messageText: 'It’s about the future of AI and how it could impact our work.',
        isLiked: false,
      },
      {
        id: 216,
        senderId: 2,
        messageText: 'Sounds fascinating. Can’t wait to dive into it.',
        isLiked: true,
      },
      { id: 217, senderId: 1, messageText: 'We should discuss it after you read it.', isLiked: false },
      {
        id: 218,
        senderId: 2,
        messageText: 'Definitely. Let’s set up a time next week.',
        isLiked: false,
      },
      { id: 219, senderId: 1, messageText: 'Perfect. I’ll send over some time slots.', isLiked: false },
    ],
  },
  {
    id: 501,
    messages: [
      { id: 220, senderId: 1, messageText: 'Hey, what’s up? 🎉', isLiked: false },
      { id: 221, senderId: 3, messageText: 'Not much, just chilling. You?', isLiked: false },
      { id: 222, senderId: 1, messageText: 'Same here. Watching a movie later.', isLiked: false },
      { id: 223, senderId: 3, messageText: 'Nice, which one?', isLiked: false },
      { id: 224, senderId: 1, messageText: "Thinking of watching 'Inception'.", isLiked: false },
      { id: 225, senderId: 3, messageText: 'Classic. Never gets old.', isLiked: false },
      { id: 226, senderId: 1, messageText: 'Right? Nolan’s movies are mind-blowing.', isLiked: false },
      { id: 227, senderId: 3, messageText: "Totally. Have you seen 'Tenet'?", isLiked: false },
      { id: 228, senderId: 1, messageText: 'Yeah, still trying to figure it out. 🤯', isLiked: true },
      { id: 229, senderId: 3, messageText: 'Haha, same here!', isLiked: false },
      { id: 230, senderId: 1, messageText: 'We should do a movie night sometime.', isLiked: false },
      { id: 231, senderId: 3, messageText: 'Definitely. Let’s plan it soon.', isLiked: false },
      { id: 232, senderId: 1, messageText: 'How about this weekend?', isLiked: false },
      { id: 233, senderId: 3, messageText: 'Sounds good to me.', isLiked: false },
      { id: 234, senderId: 1, messageText: 'Cool, I’ll bring the popcorn. 🍿', isLiked: true },
      { id: 235, senderId: 3, messageText: 'And I’ll bring the drinks.', isLiked: false },
      { id: 236, senderId: 1, messageText: 'Deal!', isLiked: false },
      { id: 237, senderId: 3, messageText: 'Can’t wait!', isLiked: false },
      {
        id: 238,
        senderId: 3,
        messageText: 'By the way, have you heard about the new Marvel movie?',
        isLiked: false,
      },
      { id: 239, senderId: 1, messageText: 'Yeah, it’s supposed to be amazing.', isLiked: false },
      { id: 240, senderId: 3, messageText: 'We should catch that too!', isLiked: false },
      { id: 241, senderId: 1, messageText: 'Absolutely. Let’s make it happen.', isLiked: false },
      {
        id: 242,
        senderId: 3,
        messageText: 'Alright, I’m in.',
        isLiked: false,
        replyMessage: { id: 241, senderId: 1, messageText: 'Absolutely. Let’s make it happen.', isLiked: false },
      },
    ],
  },
  {
    id: 502,
    messages: [
      { id: 243, senderId: 1, messageText: 'Hey, do you have a minute to chat?', isLiked: false },
      { id: 244, senderId: 4, messageText: 'Sure, what’s up?', isLiked: false },
      {
        id: 245,
        senderId: 1,
        messageText: 'I wanted to get your opinion on something.',
        isLiked: false,
      },
      { id: 246, senderId: 4, messageText: 'Of course, happy to help!', isLiked: false },
      { id: 247, senderId: 1, messageText: 'I’m thinking about starting a podcast.', isLiked: false },
      { id: 248, senderId: 4, messageText: 'That’s awesome! What’s the topic?', isLiked: false },
      {
        id: 249,
        senderId: 1,
        messageText: 'Tech and innovation. I feel like there’s a lot to explore.',
        isLiked: false,
      },
      { id: 250, senderId: 4, messageText: 'Definitely. You’d be great at that.', isLiked: false },
      {
        id: 251,
        senderId: 1,
        messageText: 'Thanks! I’m still in the planning stages though.',
        isLiked: false,
      },
      { id: 252, senderId: 4, messageText: 'Let me know if you need any help.', isLiked: false },
      {
        id: 253,
        senderId: 1,
        messageText: 'I will. I might need some feedback on the first episode.',
        isLiked: true,
      },
      { id: 254, senderId: 4, messageText: 'Happy to listen anytime.', isLiked: false },
      { id: 255, senderId: 1, messageText: 'Awesome! I’ll keep you posted.', isLiked: false },
      { id: 256, senderId: 4, messageText: 'Looking forward to it.', isLiked: false },
      {
        id: 257,
        senderId: 1,
        messageText: 'By the way, how’s your project coming along?',
        isLiked: false,
      },
      {
        id: 258,
        senderId: 4,
        messageText: 'It’s going well, but there’s still a lot to do.',
        isLiked: false,
      },
      { id: 259, senderId: 1, messageText: 'I’m sure it’s going to turn out great.', isLiked: true },
      { id: 260, senderId: 4, messageText: 'Thanks! I’m trying to stay positive.', isLiked: false },
      { id: 261, senderId: 1, messageText: 'You’ve got this! Just keep at it.', isLiked: false },
      { id: 262, senderId: 4, messageText: 'I appreciate the support.', isLiked: false },
      { id: 263, senderId: 1, messageText: 'Always here if you need to talk.', isLiked: false },
      { id: 264, senderId: 4, messageText: 'Thank you! Same goes for you.', isLiked: false },
    ],
  },
  {
    id: 503,
    messages: [
      { id: 265, senderId: 1, messageText: 'Hey, long time no chat!', isLiked: false },
      { id: 266, senderId: 5, messageText: 'I know, right? How have you been?', isLiked: false },
      {
        id: 267,
        senderId: 1,
        messageText: 'Pretty good. Just keeping busy with work.',
        isLiked: false,
      },
      { id: 268, senderId: 5, messageText: 'Same here. It’s been crazy lately.', isLiked: false },
      { id: 269, senderId: 1, messageText: 'I feel you. Any plans for the weekend?', isLiked: false },
      { id: 270, senderId: 5, messageText: 'Thinking about going hiking.', isLiked: false },
      { id: 271, senderId: 1, messageText: 'Nice! Where to?', isLiked: false },
      { id: 272, senderId: 5, messageText: 'Mount Baldy, if the weather’s good.', isLiked: false },
      { id: 273, senderId: 1, messageText: 'Hope you have a great time!', isLiked: false },
      { id: 274, senderId: 5, messageText: 'Thanks! What about you?', isLiked: false },
      { id: 275, senderId: 1, messageText: 'Just catching up on some reading.', isLiked: false },
      { id: 276, senderId: 5, messageText: 'Sounds relaxing. What are you reading?', isLiked: false },
      {
        id: 277,
        senderId: 1,
        messageText: 'A mystery novel. Keeps me on the edge of my seat.',
        isLiked: false,
      },
      { id: 278, senderId: 5, messageText: 'Love a good mystery! Who’s the author?', isLiked: false },
      { id: 279, senderId: 1, messageText: 'It’s Agatha Christie. Classic stuff.', isLiked: true },
      { id: 280, senderId: 5, messageText: 'Can’t go wrong with Christie.', isLiked: false },
      {
        id: 281,
        senderId: 1,
        messageText: 'Exactly. What about you? Reading anything lately?',
        isLiked: false,
      },
      {
        id: 282,
        senderId: 5,
        messageText: 'Not at the moment. Need to find something new.',
        isLiked: false,
      },
      { id: 283, senderId: 1, messageText: 'I can send you some recommendations.', isLiked: false },
      { id: 284, senderId: 5, messageText: 'That would be awesome, thanks!', isLiked: false },
      {
        id: 285,
        senderId: 1,
        messageText: 'No problem! I’ll message you later with some titles.',
        isLiked: false,
      },
      { id: 286, senderId: 5, messageText: 'Looking forward to it!', isLiked: false },
    ],
  },
  {
    id: 504,
    messages: [
      {
        id: 287,
        senderId: 1,
        messageText: 'Hey, I’m going to the store. Need anything?',
        isLiked: false,
      },
      { id: 288, senderId: 6, messageText: 'Could you grab some milk? Thanks!', isLiked: false },
      { id: 289, senderId: 1, messageText: 'Sure thing. Anything else?', isLiked: false },
      { id: 290, senderId: 6, messageText: 'Maybe some bread if they have it.', isLiked: false },
      { id: 291, senderId: 1, messageText: 'Got it. Be back in a bit.', isLiked: false },
      { id: 292, senderId: 6, messageText: 'Thanks, you’re the best!', isLiked: true },
      { id: 293, senderId: 1, messageText: 'No problem!', isLiked: false },
      { id: 294, senderId: 6, messageText: 'By the way, did you finish the report?', isLiked: false },
      {
        id: 295,
        senderId: 1,
        messageText: 'Almost. Just need to add a few more details.',
        isLiked: false,
      },
      { id: 296, senderId: 6, messageText: 'Cool, just let me know when it’s ready.', isLiked: false },
      { id: 297, senderId: 1, messageText: 'Will do. Should have it done by tonight.', isLiked: false },
      { id: 298, senderId: 6, messageText: 'Great! Thanks for handling that.', isLiked: false },
      { id: 299, senderId: 1, messageText: 'No worries. Happy to help.', isLiked: true },
      { id: 300, senderId: 6, messageText: 'You’re awesome.', isLiked: false },
      { id: 301, senderId: 1, messageText: 'Haha, thanks! 😊', isLiked: false },
      { id: 302, senderId: 6, messageText: 'Anytime!', isLiked: false },
      { id: 303, senderId: 1, messageText: 'By the way, we should catch up soon.', isLiked: false },
      { id: 304, senderId: 6, messageText: 'Definitely. How about next week?', isLiked: false },
      { id: 305, senderId: 1, messageText: 'Sounds good. Let’s pick a day.', isLiked: false },
      { id: 306, senderId: 6, messageText: 'How about Thursday?', isLiked: false },
      { id: 307, senderId: 1, messageText: 'Thursday works for me.', isLiked: false },
      { id: 308, senderId: 6, messageText: 'Perfect. Let’s do it.', isLiked: false },
    ],
  },
  {
    id: 505,
    messages: [
      { id: 309, senderId: 1, messageText: 'Hey, have you heard the news?', isLiked: false },
      { id: 310, senderId: 7, messageText: 'No, what happened?', isLiked: false },
      {
        id: 311,
        senderId: 1,
        messageText: 'They just announced a new product launch.',
        isLiked: false,
      },
      { id: 312, senderId: 7, messageText: 'Really? What’s the product?', isLiked: false },
      {
        id: 313,
        senderId: 1,
        messageText: 'It’s a new smartwatch with some cool features.',
        isLiked: false,
      },
      { id: 314, senderId: 7, messageText: 'That sounds interesting.', isLiked: false },
      { id: 315, senderId: 1, messageText: 'Yeah, I’m thinking of getting one.', isLiked: true },
      { id: 316, senderId: 7, messageText: 'Same here. Let’s check it out together.', isLiked: false },
      { id: 317, senderId: 1, messageText: 'Good idea. Let’s plan a day.', isLiked: false },
      { id: 318, senderId: 7, messageText: 'How about Saturday?', isLiked: false },
      { id: 319, senderId: 1, messageText: 'Saturday works for me.', isLiked: false },
      { id: 320, senderId: 7, messageText: 'Great. I’ll see you then.', isLiked: false },
      { id: 321, senderId: 1, messageText: 'Looking forward to it.', isLiked: false },
      { id: 322, senderId: 7, messageText: 'Same here!', isLiked: false },
      { id: 323, senderId: 1, messageText: 'By the way, did you finish that book?', isLiked: false },
      { id: 324, senderId: 7, messageText: 'Not yet. I’m almost done though.', isLiked: false },
      {
        id: 325,
        senderId: 1,
        messageText: 'Let me know when you do. I want to discuss it.',
        isLiked: true,
      },
      { id: 326, senderId: 7, messageText: 'Will do!', isLiked: false },
      { id: 327, senderId: 1, messageText: 'Talk soon!', isLiked: false },
      { id: 328, senderId: 7, messageText: 'You got it!', isLiked: false },
    ],
  },
  {
    id: 506,
    messages: [
      {
        id: 329,
        senderId: 1,
        messageText: 'Hey, do you have the notes from last meeting?',
        isLiked: false,
      },
      { id: 330, senderId: 8, messageText: 'Yeah, I do. Want me to send them over?', isLiked: false },
      { id: 331, senderId: 1, messageText: 'Please, that would be great.', isLiked: false },
      { id: 332, senderId: 8, messageText: 'Sending them now.', isLiked: false },
      { id: 333, senderId: 1, messageText: 'Got them, thanks!', isLiked: true },
      { id: 334, senderId: 8, messageText: 'No problem. Need anything else?', isLiked: false },
      { id: 335, senderId: 1, messageText: 'That should be it for now.', isLiked: false },
      {
        id: 336,
        senderId: 8,
        messageText: 'Alright, just let me know if you need more.',
        isLiked: false,
      },
      { id: 337, senderId: 1, messageText: 'Will do, thanks again.', isLiked: false },
      { id: 338, senderId: 8, messageText: 'Anytime!', isLiked: false },
      {
        id: 339,
        senderId: 1,
        messageText: 'By the way, what’s our next meeting about?',
        isLiked: false,
      },
      {
        id: 340,
        senderId: 8,
        messageText: 'I think we’re covering the new project scope.',
        isLiked: false,
      },
      { id: 341, senderId: 1, messageText: 'Got it. I’ll prepare some notes.', isLiked: false },
      { id: 342, senderId: 8, messageText: 'Sounds good. See you then.', isLiked: false },
      { id: 343, senderId: 1, messageText: 'See you!', isLiked: false },
    ],
  },
  {
    id: 507,
    messages: [
      {
        id: 344,
        senderId: 1,
        messageText: 'Hey, just got back from the gym. Feeling great! 💪',
        isLiked: false,
      },
      { id: 345, senderId: 9, messageText: 'Nice! What workout did you do?', isLiked: false },
      { id: 346, senderId: 1, messageText: 'Leg day. My legs are on fire. 😂', isLiked: false },
      { id: 347, senderId: 9, messageText: 'Haha, love that burn!', isLiked: false },
      { id: 348, senderId: 1, messageText: 'You know it! How’s your day going?', isLiked: false },
      { id: 349, senderId: 9, messageText: 'Pretty good, just wrapping up some work.', isLiked: false },
      { id: 350, senderId: 1, messageText: 'Nice. Got any plans for later?', isLiked: false },
      { id: 351, senderId: 9, messageText: 'Thinking about hitting the gym too.', isLiked: false },
      { id: 352, senderId: 1, messageText: 'Do it! You won’t regret it.', isLiked: true },
      { id: 353, senderId: 9, messageText: 'For sure. Need to stay on track.', isLiked: false },
      {
        id: 354,
        senderId: 1,
        messageText: 'Absolutely. We can keep each other motivated.',
        isLiked: false,
      },
      { id: 355, senderId: 9, messageText: 'Sounds like a plan!', isLiked: false },
      { id: 356, senderId: 1, messageText: 'Cool, let’s crush it!', isLiked: false },
      { id: 357, senderId: 9, messageText: 'You got it!', isLiked: false },
    ],
  },
  {
    id: 508,
    messages: [
      { id: 358, senderId: 1, messageText: 'Hey, what’s the status on the project?', isLiked: false },
      {
        id: 359,
        senderId: 10,
        messageText: 'Almost done. Just need to finalize the report.',
        isLiked: false,
      },
      { id: 360, senderId: 1, messageText: 'Great! When can I expect it?', isLiked: false },
      { id: 361, senderId: 10, messageText: 'Should have it ready by tomorrow.', isLiked: false },
      { id: 362, senderId: 1, messageText: 'Perfect. Thanks for the update.', isLiked: false },
      { id: 363, senderId: 10, messageText: 'No problem. Anything else you need?', isLiked: false },
      {
        id: 364,
        senderId: 1,
        messageText: 'That’s all for now. Keep up the good work.',
        isLiked: true,
      },
      { id: 365, senderId: 10, messageText: 'Thanks! Will do.', isLiked: false },
      {
        id: 366,
        senderId: 1,
        messageText: 'By the way, did you see the latest figures?',
        isLiked: false,
      },
      { id: 367, senderId: 10, messageText: 'Not yet. Anything surprising?', isLiked: false },
      {
        id: 368,
        senderId: 1,
        messageText: 'A bit. We’ve exceeded our targets by 15%.',
        isLiked: false,
      },
      { id: 369, senderId: 10, messageText: 'Wow, that’s great news!', isLiked: false },
      { id: 370, senderId: 1, messageText: 'Definitely. Keep it up!', isLiked: false },
      { id: 371, senderId: 10, messageText: 'Will do. Let’s keep the momentum going.', isLiked: false },
      { id: 372, senderId: 1, messageText: 'Exactly. We’re on a roll.', isLiked: true },
    ],
  },
  {
    id: 509,
    messages: [
      { id: 373, senderId: 1, messageText: 'Hey, just wanted to check in on you.', isLiked: false },
      { id: 374, senderId: 11, messageText: 'Thanks, I’m doing okay. How about you?', isLiked: false },
      {
        id: 375,
        senderId: 1,
        messageText: 'I’m good. Just wanted to see how you’re holding up.',
        isLiked: false,
      },
      {
        id: 376,
        senderId: 11,
        messageText: 'I appreciate that. It’s been a rough week.',
        isLiked: false,
      },
      {
        id: 377,
        senderId: 1,
        messageText: 'I’m sorry to hear that. If you need anything, I’m here.',
        isLiked: false,
      },
      { id: 378, senderId: 11, messageText: 'Thank you. That means a lot.', isLiked: false },
      { id: 379, senderId: 1, messageText: 'Anytime. Don’t hesitate to reach out.', isLiked: false },
      { id: 380, senderId: 11, messageText: 'I will. Thanks again.', isLiked: true },
      { id: 381, senderId: 1, messageText: 'Take care of yourself.', isLiked: false },
      { id: 382, senderId: 11, messageText: 'You too.', isLiked: false },
    ],
  },
];
