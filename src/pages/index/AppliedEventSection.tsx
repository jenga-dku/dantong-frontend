import { Section } from './Section';
import { useAuthStore } from '../../stores/auth-stores';
import { useGetAppliedEvents } from '../../query-hooks/user';
import { TicketCarousel } from '../../components/carousel/TicketCarousel';
import { EmptyTicket } from './EmptyTicket';

export const AppliedEventSection = () => {
  const { data: appliedEventList, isSuccess: isLoadSuccess } =
    useGetAppliedEvents();
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <Section title="신청 내역">
        {isLoadSuccess ? (
          isLoggedIn &&
          (appliedEventList.length === 0 ? (
            <EmptyTicket isLoggedIn />
          ) : (
            <TicketCarousel data={appliedEventList} />
          ))
        ) : (
          <EmptyTicket />
        )}
      </Section>
    </>
  );
};
