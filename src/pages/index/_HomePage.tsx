import { AppliedEventSection } from './AppliedEventSection';
import { PostSection } from './PostSection';
import { WelcomeBox } from './WelcomeBox';

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <WelcomeBox />
      <PostSection />
      <AppliedEventSection />
    </div>
  );
};
