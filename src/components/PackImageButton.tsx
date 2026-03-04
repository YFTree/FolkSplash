import React from 'react';
import { Button, Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import { useTranslation } from 'react-i18next';

interface PackImageButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  progress?: number;
  imageCount?: number;
}

export const PackImageButton: React.FC<PackImageButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  progress = 0,
  imageCount = 0,
}) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
      <Button
        variant="contained"
        size="large"
        onClick={onClick}
        disabled={disabled || loading || imageCount === 0}
        startIcon={
          loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <FolderZipIcon />
          )
        }
        sx={{
          px: { xs: 3, sm: 4 },
          py: 1.5,
          fontSize: { xs: '0.95rem', sm: '1.1rem' },
          minWidth: { xs: '160px', sm: '200px' },
          mr: { xs: 0, sm: 2 },
          mb: { xs: 2, sm: 0 },
        }}
      >
        {loading ? t('pack.packingImages') : t('pack.packImages')}
      </Button>
      {loading && (
        <Box sx={{ mt: 2, maxWidth: 600, mx: 'auto', px: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 1,
              bgcolor: 'rgba(255,255,255,0.3)',
              '& .MuiLinearProgress-bar': {
                bgcolor: 'secondary.main',
              }
            }}
          />
          <Typography variant="caption" color="inherit" sx={{ mt: 0.5, display: 'block' }}>
            {Math.round(progress)}%
          </Typography>
        </Box>
      )}
    </Box>
  );
};
