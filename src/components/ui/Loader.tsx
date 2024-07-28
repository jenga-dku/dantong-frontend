import { ClipLoader, SyncLoader } from 'react-spinners';

export const Loader = ({
  loading,
  size,
  type,
  className,
}: {
  loading?: boolean;
  size?: number;
  type?: string;
  className?: string;
}) => (
  <div className={`flex w-full justify-center ${className}`}>
    {type === 'clip' ? (
      <ClipLoader
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
    ) : (
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
    )}
  </div>
);
