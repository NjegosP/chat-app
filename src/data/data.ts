export type MessageType = {
  id: number;
  senderId: number;
  message: string;
  isLiked: boolean;
  isReply: boolean;
  replyMessage?: MessageType; // Optional, only present if isReply is true
};

export type Conversation = {
  id: number;
  messages: MessageType[];
};

export const conversations: Conversation[] = [
  {
    id: 1000,
    messages: [
      { id: 200, senderId: 1, message: 'Hey, how’s everything going?', isLiked: false, isReply: false },
      {
        id: 201,
        senderId: 2,
        message: 'Pretty good! Just finished a big project. How about you?',
        isLiked: true,
        isReply: false,
      },
      {
        id: 202,
        senderId: 1,
        message: 'Nice! I’ve been working on some new ideas. 🚀',
        isLiked: false,
        isReply: false,
      },
      { id: 203, senderId: 1, message: 'Maybe we could collaborate on something?', isLiked: false, isReply: false },
      {
        id: 204,
        senderId: 2,
        message: 'That sounds interesting. Let’s discuss it soon.',
        isLiked: false,
        isReply: false,
      },
      { id: 205, senderId: 2, message: 'Are you free next week?', isLiked: false, isReply: false },
      { id: 206, senderId: 1, message: 'I should be. I’ll check my calendar.', isLiked: false, isReply: false },
      { id: 207, senderId: 2, message: 'Great! Just let me know.', isLiked: false, isReply: false },
      { id: 208, senderId: 1, message: 'Will do! Talk to you later.', isLiked: true, isReply: false },
      { id: 209, senderId: 2, message: 'Later!', isLiked: false, isReply: false },
      {
        id: 210,
        senderId: 1,
        message: 'Hey, did you check out that article I sent?',
        isLiked: false,
        isReply: false,
      },
      { id: 211, senderId: 2, message: 'Not yet, but it’s on my list.', isLiked: false, isReply: false },
      {
        id: 212,
        senderId: 1,
        message: 'It’s a good read, I think you’ll like it.',
        isLiked: false,
        isReply: false,
      },
      { id: 213, senderId: 2, message: 'I’ll check it out tonight.', isLiked: false, isReply: false },
      { id: 214, senderId: 2, message: 'What’s it about?', isLiked: false, isReply: false },
      {
        id: 215,
        senderId: 1,
        message: 'It’s about the future of AI and how it could impact our work.',
        isLiked: false,
        isReply: false,
      },
      {
        id: 216,
        senderId: 2,
        message: 'Sounds fascinating. Can’t wait to dive into it.',
        isLiked: true,
        isReply: false,
      },
      { id: 217, senderId: 1, message: 'We should discuss it after you read it.', isLiked: false, isReply: false },
      {
        id: 218,
        senderId: 2,
        message: 'Definitely. Let’s set up a time next week.',
        isLiked: false,
        isReply: false,
      },
      { id: 219, senderId: 1, message: 'Perfect. I’ll send over some time slots.', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1001,
    messages: [
      { id: 220, senderId: 1, message: 'Hey, what’s up? 🎉', isLiked: false, isReply: false },
      { id: 221, senderId: 3, message: 'Not much, just chilling. You?', isLiked: false, isReply: false },
      { id: 222, senderId: 1, message: 'Same here. Watching a movie later.', isLiked: false, isReply: false },
      { id: 223, senderId: 3, message: 'Nice, which one?', isLiked: false, isReply: false },
      { id: 224, senderId: 1, message: "Thinking of watching 'Inception'.", isLiked: false, isReply: false },
      { id: 225, senderId: 3, message: 'Classic. Never gets old.', isLiked: false, isReply: false },
      { id: 226, senderId: 1, message: 'Right? Nolan’s movies are mind-blowing.', isLiked: false, isReply: false },
      { id: 227, senderId: 3, message: "Totally. Have you seen 'Tenet'?", isLiked: false, isReply: false },
      { id: 228, senderId: 1, message: 'Yeah, still trying to figure it out. 🤯', isLiked: true, isReply: false },
      { id: 229, senderId: 3, message: 'Haha, same here!', isLiked: false, isReply: false },
      { id: 230, senderId: 1, message: 'We should do a movie night sometime.', isLiked: false, isReply: false },
      { id: 231, senderId: 3, message: 'Definitely. Let’s plan it soon.', isLiked: false, isReply: false },
      { id: 232, senderId: 1, message: 'How about this weekend?', isLiked: false, isReply: false },
      { id: 233, senderId: 3, message: 'Sounds good to me.', isLiked: false, isReply: false },
      { id: 234, senderId: 1, message: 'Cool, I’ll bring the popcorn. 🍿', isLiked: true, isReply: false },
      { id: 235, senderId: 3, message: 'And I’ll bring the drinks.', isLiked: false, isReply: false },
      { id: 236, senderId: 1, message: 'Deal!', isLiked: false, isReply: false },
      { id: 237, senderId: 3, message: 'Can’t wait!', isLiked: false, isReply: false },
      {
        id: 238,
        senderId: 3,
        message: 'By the way, have you heard about the new Marvel movie?',
        isLiked: false,
        isReply: false,
      },
      { id: 239, senderId: 1, message: 'Yeah, it’s supposed to be amazing.', isLiked: false, isReply: false },
      { id: 240, senderId: 3, message: 'We should catch that too!', isLiked: false, isReply: false },
      { id: 241, senderId: 1, message: 'Absolutely. Let’s make it happen.', isLiked: false, isReply: false },
      { id: 242, senderId: 3, message: 'Alright, I’m in.', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1002,
    messages: [
      { id: 243, senderId: 1, message: 'Hey, do you have a minute to chat?', isLiked: false, isReply: false },
      { id: 244, senderId: 4, message: 'Sure, what’s up?', isLiked: false, isReply: false },
      {
        id: 245,
        senderId: 1,
        message: 'I wanted to get your opinion on something.',
        isLiked: false,
        isReply: false,
      },
      { id: 246, senderId: 4, message: 'Of course, happy to help!', isLiked: false, isReply: false },
      { id: 247, senderId: 1, message: 'I’m thinking about starting a podcast.', isLiked: false, isReply: false },
      { id: 248, senderId: 4, message: 'That’s awesome! What’s the topic?', isLiked: false, isReply: false },
      {
        id: 249,
        senderId: 1,
        message: 'Tech and innovation. I feel like there’s a lot to explore.',
        isLiked: false,
        isReply: false,
      },
      { id: 250, senderId: 4, message: 'Definitely. You’d be great at that.', isLiked: false, isReply: false },
      {
        id: 251,
        senderId: 1,
        message: 'Thanks! I’m still in the planning stages though.',
        isLiked: false,
        isReply: false,
      },
      { id: 252, senderId: 4, message: 'Let me know if you need any help.', isLiked: false, isReply: false },
      {
        id: 253,
        senderId: 1,
        message: 'I will. I might need some feedback on the first episode.',
        isLiked: true,
        isReply: false,
      },
      { id: 254, senderId: 4, message: 'Happy to listen anytime.', isLiked: false, isReply: false },
      { id: 255, senderId: 1, message: 'Awesome! I’ll keep you posted.', isLiked: false, isReply: false },
      { id: 256, senderId: 4, message: 'Looking forward to it.', isLiked: false, isReply: false },
      {
        id: 257,
        senderId: 1,
        message: 'By the way, how’s your project coming along?',
        isLiked: false,
        isReply: false,
      },
      {
        id: 258,
        senderId: 4,
        message: 'It’s going well, but there’s still a lot to do.',
        isLiked: false,
        isReply: false,
      },
      { id: 259, senderId: 1, message: 'I’m sure it’s going to turn out great.', isLiked: true, isReply: false },
      { id: 260, senderId: 4, message: 'Thanks! I’m trying to stay positive.', isLiked: false, isReply: false },
      { id: 261, senderId: 1, message: 'You’ve got this! Just keep at it.', isLiked: false, isReply: false },
      { id: 262, senderId: 4, message: 'I appreciate the support.', isLiked: false, isReply: false },
      { id: 263, senderId: 1, message: 'Always here if you need to talk.', isLiked: false, isReply: false },
      { id: 264, senderId: 4, message: 'Thank you! Same goes for you.', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1003,
    messages: [
      { id: 265, senderId: 1, message: 'Hey, long time no chat!', isLiked: false, isReply: false },
      { id: 266, senderId: 5, message: 'I know, right? How have you been?', isLiked: false, isReply: false },
      { id: 267, senderId: 1, message: 'Pretty good. Just keeping busy with work.', isLiked: false, isReply: false },
      { id: 268, senderId: 5, message: 'Same here. It’s been crazy lately.', isLiked: false, isReply: false },
      { id: 269, senderId: 1, message: 'I feel you. Any plans for the weekend?', isLiked: false, isReply: false },
      { id: 270, senderId: 5, message: 'Thinking about going hiking.', isLiked: false, isReply: false },
      { id: 271, senderId: 1, message: 'Nice! Where to?', isLiked: false, isReply: false },
      { id: 272, senderId: 5, message: 'Mount Baldy, if the weather’s good.', isLiked: false, isReply: false },
      { id: 273, senderId: 1, message: 'Hope you have a great time!', isLiked: false, isReply: false },
      { id: 274, senderId: 5, message: 'Thanks! What about you?', isLiked: false, isReply: false },
      { id: 275, senderId: 1, message: 'Just catching up on some reading.', isLiked: false, isReply: false },
      { id: 276, senderId: 5, message: 'Sounds relaxing. What are you reading?', isLiked: false, isReply: false },
      {
        id: 277,
        senderId: 1,
        message: 'A mystery novel. Keeps me on the edge of my seat.',
        isLiked: false,
        isReply: false,
      },
      { id: 278, senderId: 5, message: 'Love a good mystery! Who’s the author?', isLiked: false, isReply: false },
      { id: 279, senderId: 1, message: 'It’s Agatha Christie. Classic stuff.', isLiked: true, isReply: false },
      { id: 280, senderId: 5, message: 'Can’t go wrong with Christie.', isLiked: false, isReply: false },
      {
        id: 281,
        senderId: 1,
        message: 'Exactly. What about you? Reading anything lately?',
        isLiked: false,
        isReply: false,
      },
      {
        id: 282,
        senderId: 5,
        message: 'Not at the moment. Need to find something new.',
        isLiked: false,
        isReply: false,
      },
      { id: 283, senderId: 1, message: 'I can send you some recommendations.', isLiked: false, isReply: false },
      { id: 284, senderId: 5, message: 'That would be awesome, thanks!', isLiked: false, isReply: false },
      {
        id: 285,
        senderId: 1,
        message: 'No problem! I’ll message you later with some titles.',
        isLiked: false,
        isReply: false,
      },
      { id: 286, senderId: 5, message: 'Looking forward to it!', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1004,
    messages: [
      {
        id: 287,
        senderId: 1,
        message: 'Hey, I’m going to the store. Need anything?',
        isLiked: false,
        isReply: false,
      },
      { id: 288, senderId: 6, message: 'Could you grab some milk? Thanks!', isLiked: false, isReply: false },
      { id: 289, senderId: 1, message: 'Sure thing. Anything else?', isLiked: false, isReply: false },
      { id: 290, senderId: 6, message: 'Maybe some bread if they have it.', isLiked: false, isReply: false },
      { id: 291, senderId: 1, message: 'Got it. Be back in a bit.', isLiked: false, isReply: false },
      { id: 292, senderId: 6, message: 'Thanks, you’re the best!', isLiked: true, isReply: false },
      { id: 293, senderId: 1, message: 'No problem!', isLiked: false, isReply: false },
      { id: 294, senderId: 6, message: 'By the way, did you finish the report?', isLiked: false, isReply: false },
      {
        id: 295,
        senderId: 1,
        message: 'Almost. Just need to add a few more details.',
        isLiked: false,
        isReply: false,
      },
      { id: 296, senderId: 6, message: 'Cool, just let me know when it’s ready.', isLiked: false, isReply: false },
      { id: 297, senderId: 1, message: 'Will do. Should have it done by tonight.', isLiked: false, isReply: false },
      { id: 298, senderId: 6, message: 'Great! Thanks for handling that.', isLiked: false, isReply: false },
      { id: 299, senderId: 1, message: 'No worries. Happy to help.', isLiked: true, isReply: false },
      { id: 300, senderId: 6, message: 'You’re awesome.', isLiked: false, isReply: false },
      { id: 301, senderId: 1, message: 'Haha, thanks! 😊', isLiked: false, isReply: false },
      { id: 302, senderId: 6, message: 'Anytime!', isLiked: false, isReply: false },
      { id: 303, senderId: 1, message: 'By the way, we should catch up soon.', isLiked: false, isReply: false },
      { id: 304, senderId: 6, message: 'Definitely. How about next week?', isLiked: false, isReply: false },
      { id: 305, senderId: 1, message: 'Sounds good. Let’s pick a day.', isLiked: false, isReply: false },
      { id: 306, senderId: 6, message: 'How about Thursday?', isLiked: false, isReply: false },
      { id: 307, senderId: 1, message: 'Thursday works for me.', isLiked: false, isReply: false },
      { id: 308, senderId: 6, message: 'Perfect. Let’s do it.', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1005,
    messages: [
      { id: 309, senderId: 1, message: 'Hey, have you heard the news?', isLiked: false, isReply: false },
      { id: 310, senderId: 7, message: 'No, what happened?', isLiked: false, isReply: false },
      { id: 311, senderId: 1, message: 'They just announced a new product launch.', isLiked: false, isReply: false },
      { id: 312, senderId: 7, message: 'Really? What’s the product?', isLiked: false, isReply: false },
      {
        id: 313,
        senderId: 1,
        message: 'It’s a new smartwatch with some cool features.',
        isLiked: false,
        isReply: false,
      },
      { id: 314, senderId: 7, message: 'That sounds interesting.', isLiked: false, isReply: false },
      { id: 315, senderId: 1, message: 'Yeah, I’m thinking of getting one.', isLiked: true, isReply: false },
      { id: 316, senderId: 7, message: 'Same here. Let’s check it out together.', isLiked: false, isReply: false },
      { id: 317, senderId: 1, message: 'Good idea. Let’s plan a day.', isLiked: false, isReply: false },
      { id: 318, senderId: 7, message: 'How about Saturday?', isLiked: false, isReply: false },
      { id: 319, senderId: 1, message: 'Saturday works for me.', isLiked: false, isReply: false },
      { id: 320, senderId: 7, message: 'Great. I’ll see you then.', isLiked: false, isReply: false },
      { id: 321, senderId: 1, message: 'Looking forward to it.', isLiked: false, isReply: false },
      { id: 322, senderId: 7, message: 'Same here!', isLiked: false, isReply: false },
      { id: 323, senderId: 1, message: 'By the way, did you finish that book?', isLiked: false, isReply: false },
      { id: 324, senderId: 7, message: 'Not yet. I’m almost done though.', isLiked: false, isReply: false },
      {
        id: 325,
        senderId: 1,
        message: 'Let me know when you do. I want to discuss it.',
        isLiked: true,
        isReply: false,
      },
      { id: 326, senderId: 7, message: 'Will do!', isLiked: false, isReply: false },
      { id: 327, senderId: 1, message: 'Talk soon!', isLiked: false, isReply: false },
      { id: 328, senderId: 7, message: 'You got it!', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1006,
    messages: [
      {
        id: 329,
        senderId: 1,
        message: 'Hey, do you have the notes from last meeting?',
        isLiked: false,
        isReply: false,
      },
      { id: 330, senderId: 8, message: 'Yeah, I do. Want me to send them over?', isLiked: false, isReply: false },
      { id: 331, senderId: 1, message: 'Please, that would be great.', isLiked: false, isReply: false },
      { id: 332, senderId: 8, message: 'Sending them now.', isLiked: false, isReply: false },
      { id: 333, senderId: 1, message: 'Got them, thanks!', isLiked: true, isReply: false },
      { id: 334, senderId: 8, message: 'No problem. Need anything else?', isLiked: false, isReply: false },
      { id: 335, senderId: 1, message: 'That should be it for now.', isLiked: false, isReply: false },
      {
        id: 336,
        senderId: 8,
        message: 'Alright, just let me know if you need more.',
        isLiked: false,
        isReply: false,
      },
      { id: 337, senderId: 1, message: 'Will do, thanks again.', isLiked: false, isReply: false },
      { id: 338, senderId: 8, message: 'Anytime!', isLiked: false, isReply: false },
      {
        id: 339,
        senderId: 1,
        message: 'By the way, what’s our next meeting about?',
        isLiked: false,
        isReply: false,
      },
      {
        id: 340,
        senderId: 8,
        message: 'I think we’re covering the new project scope.',
        isLiked: false,
        isReply: false,
      },
      { id: 341, senderId: 1, message: 'Got it. I’ll prepare some notes.', isLiked: false, isReply: false },
      { id: 342, senderId: 8, message: 'Sounds good. See you then.', isLiked: false, isReply: false },
      { id: 343, senderId: 1, message: 'See you!', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1007,
    messages: [
      {
        id: 344,
        senderId: 1,
        message: 'Hey, just got back from the gym. Feeling great! 💪',
        isLiked: false,
        isReply: false,
      },
      { id: 345, senderId: 9, message: 'Nice! What workout did you do?', isLiked: false, isReply: false },
      { id: 346, senderId: 1, message: 'Leg day. My legs are on fire. 😂', isLiked: false, isReply: false },
      { id: 347, senderId: 9, message: 'Haha, love that burn!', isLiked: false, isReply: false },
      { id: 348, senderId: 1, message: 'You know it! How’s your day going?', isLiked: false, isReply: false },
      { id: 349, senderId: 9, message: 'Pretty good, just wrapping up some work.', isLiked: false, isReply: false },
      { id: 350, senderId: 1, message: 'Nice. Got any plans for later?', isLiked: false, isReply: false },
      { id: 351, senderId: 9, message: 'Thinking about hitting the gym too.', isLiked: false, isReply: false },
      { id: 352, senderId: 1, message: 'Do it! You won’t regret it.', isLiked: true, isReply: false },
      { id: 353, senderId: 9, message: 'For sure. Need to stay on track.', isLiked: false, isReply: false },
      {
        id: 354,
        senderId: 1,
        message: 'Absolutely. We can keep each other motivated.',
        isLiked: false,
        isReply: false,
      },
      { id: 355, senderId: 9, message: 'Sounds like a plan!', isLiked: false, isReply: false },
      { id: 356, senderId: 1, message: 'Cool, let’s crush it!', isLiked: false, isReply: false },
      { id: 357, senderId: 9, message: 'You got it!', isLiked: false, isReply: false },
    ],
  },
  {
    id: 1008,
    messages: [
      { id: 358, senderId: 1, message: 'Hey, what’s the status on the project?', isLiked: false, isReply: false },
      {
        id: 359,
        senderId: 10,
        message: 'Almost done. Just need to finalize the report.',
        isLiked: false,
        isReply: false,
      },
      { id: 360, senderId: 1, message: 'Great! When can I expect it?', isLiked: false, isReply: false },
      { id: 361, senderId: 10, message: 'Should have it ready by tomorrow.', isLiked: false, isReply: false },
      { id: 362, senderId: 1, message: 'Perfect. Thanks for the update.', isLiked: false, isReply: false },
      { id: 363, senderId: 10, message: 'No problem. Anything else you need?', isLiked: false, isReply: false },
      { id: 364, senderId: 1, message: 'That’s all for now. Keep up the good work.', isLiked: true, isReply: false },
      { id: 365, senderId: 10, message: 'Thanks! Will do.', isLiked: false, isReply: false },
      {
        id: 366,
        senderId: 1,
        message: 'By the way, did you see the latest figures?',
        isLiked: false,
        isReply: false,
      },
      { id: 367, senderId: 10, message: 'Not yet. Anything surprising?', isLiked: false, isReply: false },
      {
        id: 368,
        senderId: 1,
        message: 'A bit. We’ve exceeded our targets by 15%.',
        isLiked: false,
        isReply: false,
      },
      { id: 369, senderId: 10, message: 'Wow, that’s great news!', isLiked: false, isReply: false },
      { id: 370, senderId: 1, message: 'Definitely. Keep it up!', isLiked: false, isReply: false },
      { id: 371, senderId: 10, message: 'Will do. Let’s keep the momentum going.', isLiked: false, isReply: false },
      { id: 372, senderId: 1, message: 'Exactly. We’re on a roll.', isLiked: true, isReply: false },
    ],
  },
  {
    id: 1009,
    messages: [
      { id: 373, senderId: 1, message: 'Hey, just wanted to check in on you.', isLiked: false, isReply: false },
      { id: 374, senderId: 11, message: 'Thanks, I’m doing okay. How about you?', isLiked: false, isReply: false },
      {
        id: 375,
        senderId: 1,
        message: 'I’m good. Just wanted to see how you’re holding up.',
        isLiked: false,
        isReply: false,
      },
      {
        id: 376,
        senderId: 11,
        message: 'I appreciate that. It’s been a rough week.',
        isLiked: false,
        isReply: false,
      },
      {
        id: 377,
        senderId: 1,
        message: 'I’m sorry to hear that. If you need anything, I’m here.',
        isLiked: false,
        isReply: false,
      },
      { id: 378, senderId: 11, message: 'Thank you. That means a lot.', isLiked: false, isReply: false },
      { id: 379, senderId: 1, message: 'Anytime. Don’t hesitate to reach out.', isLiked: false, isReply: false },
      { id: 380, senderId: 11, message: 'I will. Thanks again.', isLiked: true, isReply: false },
      { id: 381, senderId: 1, message: 'Take care of yourself.', isLiked: false, isReply: false },
      { id: 382, senderId: 11, message: 'You too.', isLiked: false, isReply: false },
    ],
  },
];
