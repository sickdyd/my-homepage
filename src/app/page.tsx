import Link from "./components/Link";
import { Paragraph } from "./components/Paragraph";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <>
      <Quote
        cite="https://quoteinvestigator.com/2015/04/02/simple/"
        quote="Simplicity is the ultimate sophistication."
        author="Unknown"
      />

      <Paragraph>👋 Hi, I'm Roberto Reale. Welcome!</Paragraph>
      <Paragraph>
        I’m a web developer specializing in React, Next.js, Node.js, and Ruby on
        Rails, with a solid foundation in HTML and CSS (including Tailwind).
      </Paragraph>
      <Paragraph>
        I am proud to be a{" "}
        <Link
          target="_blank"
          href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/public_url"
          aria-label="Certified Kubernetes Administrator badge on Credly"
        >
          Certified Kubernetes Administrator
        </Link>
        .
      </Paragraph>
      <Paragraph>
        In my free time I contribute to the Open Source community with various{" "}
        <Link
          target="_blank"
          href="https://www.npmjs.com/~sickdyd"
          aria-label="npm packages on npmjs.com"
        >
          npm packages
        </Link>
        .
      </Paragraph>
      <Paragraph>
        Based in the vibrant city of Osaka, I’m always looking to connect with
        like-minded professionals and enthusiasts. For that reason, I created a{" "}
        <Link
          href="https://www.meetup.com/osaka-digital-nomads-meetup-group/"
          target="_blank"
          aria-label="digital nomads meetup"
        >
          weekly meetup event
        </Link>{" "}
        that connects developers from all over the world.
      </Paragraph>
      <Paragraph>
        Feel free to reach out! Drop me an{" "}
        <Link
          href="mailto:roberto.reale.ja@gmail.com"
          aria-label="Send email to Roberto Reale"
        >
          email
        </Link>{" "}
        and let’s start a conversation. :-)
      </Paragraph>
    </>
  );
}
