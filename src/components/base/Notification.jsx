import { ReactComponent as CheckMarkIcon } from '../../assets/icons/checkmark.svg'
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as AlertCircleIcon } from '../../assets/icons/alert-circle-outline.svg'
import { useEffect } from 'react'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { toggleNotification } from '../../store/actions';

export const Notification = ({ title, description, visible, type }) => {
  const dispatch = useDispatch()
  
  const notificationTypesIcon = {
    error: () => <LockIcon className="w-6 h-8 text-red-400" />,
    info: () => <AlertCircleIcon className="w-6 h-8 text-yellow-400" />,
    success: () => <CheckMarkIcon className="w-6 h-8 text-green-400" />,
  };

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        dispatch(toggleNotification({
          title: '',
          visible: false,
          description: '',
        }))
      }, 5000);
    }
  }, [visible, dispatch])
  
  const renderNotification = () => {
    return (
      visible && (
        <div className="fixed top-12 right-12">
          <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
            <div className="flex flex-row items-center">
              <div className="px-2">{notificationTypesIcon[type]()}</div>
              <div className="ml-2 mr-6">
                <span className="font-semibold">{title}</span>
                <span className="block text-gray-500">{description}</span>
              </div>
            </div>
          </div>
        </div>
      )
    );
  };

  return renderNotification();
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};