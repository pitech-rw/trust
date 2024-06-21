import Link from 'next/link';
import styles from './StyledLink.module.css';

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
};

export default StyledLink;