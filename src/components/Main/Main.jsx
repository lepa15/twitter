import './Main.css';
import About from '@/components/About/About';
import Posts from '@/components/Posts/Posts';
import PopularTopics from '@/components/PopularTopics/PopularTopics';
import TopBloggers from '@/components/TopBloggers/TopBloggers';

function Main() {
  return (
    <>
      <About />
      <div className="flex justify-center">
        <Posts />
        <div className="hidden [@media(min-width:720px)]:flex flex-col gap-4 mt-[127px]">
          <PopularTopics />
          <TopBloggers />
        </div>
      </div>
    </>
  );
}

export default Main;
