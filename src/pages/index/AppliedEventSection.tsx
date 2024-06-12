import { Section } from './Section';
import { useAuthStore } from '../../stores/auth-stores';
import { useGetAppliedEvents } from '../../query-hooks/user';
import { TicketCarousel } from '../../components/carousel/TicketCarousel';

export const AppliedEventSection = () => {
  const { data: appliedEventList, isSuccess: isLoadSuccess } =
    useGetAppliedEvents();
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      {isLoggedIn && isLoadSuccess && (
        <Section title="신청한 행사">
          <TicketCarousel data={appliedEventList} />
        </Section>
      )}
    </>
  );
};
