import { FlashcardService } from '@/lib/ai/services/flashcardService';
import { NextRequest, NextResponse } from 'next/server';
import { validateFileContent } from './validators';

export const POST = async (req: NextRequest) => {
  const { content } = await req.json();

  validateFileContent(content);

  const flashCards = await FlashcardService.generateFromContent(content);
  return NextResponse.json({ flashCards });
};

const mockResponse = {
  deckName: 'Web & Cloud Dev Basics',
  timeForCompletion: '7',
  description: 'Key concepts of web and cloud development.',
  content: [
    {
      section: 'Basic Communication Between Client and Server',
      cards: [
        {
          question: 'How do users typically access websites?',
          answer: 'Users launch internet browsers and enter URLs.'
        },
        {
          question: 'What data does a server typically send back to a browser?',
          answer:
            'HTML (structure), CSS (style), and JavaScript (interactivity).'
        }
      ]
    },
    {
      section: 'Website Construction',
      cards: [
        {
          question: 'Differentiate static vs. dynamic website content.',
          answer:
            'Static content is pre-stored; dynamic content is generated in real-time based on user requests.'
        },
        {
          question:
            'How do most websites enhance user experience regarding content?',
          answer:
            'By combining both static and dynamic elements, often pulling data from databases.'
        }
      ]
    },
    {
      section: 'Front-End and Back-End Development',
      cards: [
        {
          question: 'What is the primary focus of front-end development?',
          answer:
            'Client-side development, using HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces.'
        },
        {
          question: 'What does back-end development typically involve?',
          answer:
            'Server-side processes, including application logic, data management, and security, often working with databases.'
        }
      ]
    },
    {
      section: 'Full-Stack Development',
      cards: [
        {
          question: 'Define a full-stack developer.',
          answer:
            'A developer with skills in both front-end and back-end development, capable of working on all aspects of a web application.'
        },
        {
          question: 'What kind of knowledge is required for a full-stack role?',
          answer:
            'Knowledge of various programming languages and frameworks for both client and server-side development.'
        }
      ]
    },
    {
      section: 'Development Tools and Environments',
      cards: [
        {
          question:
            'What tools do developers use to write, debug, and manage code?',
          answer:
            'Code editors (e.g., Sublime Text, Atom) and Integrated Development Environments (IDEs) like Visual Studio and Eclipse.'
        },
        {
          question: 'List key features of good IDEs.',
          answer:
            'Support for multiple programming languages, integration with version control systems (like Git), and customization options.'
        }
      ]
    },
    {
      section: 'Conclusion',
      cards: [
        {
          question:
            'What are the fundamental aspects of web and cloud development highlighted?',
          answer:
            'Client-server communication, the roles of front-end and back-end development, and essential development tools.'
        },
        {
          question: 'Why is understanding these concepts crucial?',
          answer:
            'For anyone looking to pursue a career in software engineering or web development.'
        }
      ]
    }
  ]
};

export const GET = async () => {
  return NextResponse.json({ data: mockResponse, status: 200 });
};
