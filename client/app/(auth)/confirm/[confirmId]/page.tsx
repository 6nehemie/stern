import SetPasswordForm from '@/components/forms/SetPasswordForm';
import SignUpWrapper from '@/components/wrappers/SignUpWrapper';

const Confirm = ({ params }: { params: { confirmId: string } }) => {
  console.log(params.confirmId);

  return (
    <SignUpWrapper>
      <SetPasswordForm />
    </SignUpWrapper>
  );
};

export default Confirm;
