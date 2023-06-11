import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#00b700',
    color: '#00b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  }
}));


const CustomAvatar = ({user}) => {
  return (
    <div className="my-2 scale-90 cursor-pointer">
      {user?.message !== 0 && <Badge badgeContent={user.message} sx={{'& > .MuiBadge-badge': {backgroundColor: '#ef4445', top: 5}}} color="secondary">
        {user?.online && <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt={user?.name} src={user?.image} />
        </StyledBadge>}

        {!user?.online && <Avatar alt={user?.name} src={user?.image} />}
      </Badge>}

      {user?.message === 0 && <div>
        {user?.online && <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt={user?.name} src={user?.image} />
        </StyledBadge>}

        {!user?.online && <Avatar alt={user?.name} src={user?.image} />}
      </div>}
    </div>
  )
}

export default CustomAvatar