import { Layout } from '../../components/Layout';
import { AppliedEventSection } from './AppliedEventSection';
import { PostSection } from './PostSection';
import { WelcomeBox } from './WelcomeBox';

export const HomePage = () => {
  return (
    <Layout className="gap-8">
      <WelcomeBox />
      <PostSection />
      <AppliedEventSection />
    </Layout>
  );
};
