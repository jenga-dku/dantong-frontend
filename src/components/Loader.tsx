import { SyncLoader } from 'react-spinners';

export const Loader = ({
  loading,
  size,
}: {
  loading: boolean;
  size?: number;
}) => (
  <SyncLoader
    color="#308FFF"
    loading={loading}
    cssOverride={{
      display: 'block',
      margin: '-10px auto auto',
    }}
    size={size ?? 15}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);
