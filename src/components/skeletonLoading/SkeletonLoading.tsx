import Skeleton from '@mui/material/Skeleton'
import { ContainerSkeleton } from './SkeletonLoading.styled'

export const SkeletonLoading = () => {
  const numProducts = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <ContainerSkeleton>
        {numProducts.map(item => {
          return (
            <Skeleton
              key={item}
              variant="rectangular"
              width={217}
              height={275}
              sx={{ marginRight: '10px', borderRadius: '8px' }}
            />
          )
        })}
      </ContainerSkeleton>
    </>
  )
}
