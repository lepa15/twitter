export default function checkValidEmail(email) {
  const emailParts = email.split('@');
  if (emailParts.length !== 2) return false;

  const [local, domain] = emailParts;
  if (!local || !domain) return false;

  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;
  if (domainParts.some((part) => part.length < 2)) return false;

  return true;
}
