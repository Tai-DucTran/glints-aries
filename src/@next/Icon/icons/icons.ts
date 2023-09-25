import { SVGProps } from 'react';
import * as Icons from '../components';

export const iconNames = [
  'custom-sparkling-fill',
  'custom-sparkling-line',
  'ri-account-circle-fill',
  'ri-account-circle-line',
  'ri-add-circle-fill',
  'ri-add-circle-line',
  'ri-add',
  'ri-alarm-warning-fill',
  'ri-alarm-warning-line',
  'ri-arrow-down-fill',
  'ri-arrow-down-line',
  'ri-arrow-go-back-fill',
  'ri-arrow-go-back-line',
  'ri-arrow-go-forward-fill',
  'ri-arrow-go-forward-line',
  'ri-arrow-left-fill',
  'ri-arrow-left-line',
  'ri-arrow-left-right-fill',
  'ri-arrow-left-right-line',
  'ri-arrow-m-down-fill',
  'ri-arrow-m-down-line',
  'ri-arrow-m-left-fill',
  'ri-arrow-m-left-line',
  'ri-arrow-m-right-fill',
  'ri-arrow-m-right-line',
  'ri-arrow-m-up-fill',
  'ri-arrow-m-up-line',
  'ri-arrow-right-fill',
  'ri-arrow-right-line',
  'ri-arrow-up-down-fill',
  'ri-arrow-up-down-line',
  'ri-arrow-up-fill',
  'ri-arrow-up-line',
  'ri-arrow-xs-down-fill',
  'ri-arrow-xs-up-fill',
  'ri-bookmark-fill',
  'ri-bookmark-line',
  'ri-building-line',
  'ri-building-fill',
  'ri-briefcase-fill',
  'ri-briefcase-line',
  'ri-calendar-check-line',
  'ri-calendar-check-fill',
  'ri-calendar-event-fill',
  'ri-calendar-event-line',
  'ri-calendar-fill',
  'ri-calendar-line',
  'ri-check',
  'ri-checkbox-circle-fill',
  'ri-checkbox-fill',
  'ri-checkbox-indeterminate-fill',
  'ri-checkbox-indeterminate-line',
  'ri-checkbox-line',
  'ri-close-circle-fill',
  'ri-close-circle-line',
  'ri-close',
  'ri-coins-line',
  'ri-contract-left-line',
  'ri-delete-bin-fill',
  'ri-delete-bin-line',
  'ri-download-line',
  'ri-equalizer-line',
  'ri-error-warning-fill',
  'ri-error-warning-line',
  'ri-expand-right-line',
  'ri-external-link-line',
  'ri-eye-off-fill',
  'ri-eye-off-line',
  'ri-eye-fill',
  'ri-eye-line',
  'ri-facebook-circle-fill',
  'ri-facebook-circle-line',
  'ri-file-download-line',
  'ri-file-fill',
  'ri-file-line',
  'ri-file-list3-fill',
  'ri-folder-user-fill',
  'ri-group2-fill',
  'ri-information-fill',
  'ri-information-line',
  'ri-instagram-line',
  'ri-linkedin-fill',
  'ri-linkedIn-line',
  'ri-loader',
  'ri-logout-circle-line',
  'ri-mail-line',
  'ri-mail-send-fill',
  'ri-more',
  'ri-map-fill',
  'ri-map-line',
  'ri-menu-line',
  'ri-message-fill',
  'ri-message-line',
  'ri-minus',
  'ri-pencil-fill',
  'ri-pencil-line',
  'ri-question-fill',
  'ri-question-line',
  'ri-reply-fill',
  'ri-reply-line',
  'ri-search',
  'ri-send-plane-fill',
  'ri-send-plane-line',
  'ri-settings-fill',
  'ri-settings-line',
  'ri-shield-check',
  'ri-suitcase3-line',
  'ri-suitcase3-fill',
  'ri-tiktok-line',
  'ri-timer3-fill',
  'ri-timer3-line',
  'ri-twitter-line',
  'ri-upload-fill',
  'ri-upload-line',
  'ri-user5-line',
  'ri-user5-fill',
  'ri-sparkling2-line',
  'ri-sparkling2-fill',
  'ri-money-dollar-circle-fill',
  'ri-money-dollar-circle-line',
  'ri-shining2-line',
  'ri-shining2-fill',
  'ri-infinity',
  'ri-discuss-fill',
  'ri-discuss-line',
  'ri-file-copy2-line',
  'ri-checkbox-circle-line',
  'ri-attachment-fill',
  'ri-attachment-line',
  'ri-chat-quote-fill',
  'ri-chat-quote-line',
  'ri-contacts-fill',
  'ri-contacts-line',
  'ri-file-list-fill',
  'ri-file-list-line',
  'ri-graduation-fill',
  'ri-graduation-line',
  'ri-group-fill',
  'ri-group-line',
  'ri-phone-fill',
  'ri-phone-line',
  'ri-survey-fill',
  'ri-survey-line',
  'ri-hand-coin-fill',
  'ri-hand-coin-line',
  'ri-lock-fill',
  'ri-lock-line',
  'ri-flashlight-fill',
  'ri-flashlight-line',
] as const;

export type IconNames = (typeof iconNames)[number];
type SVGComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const iconsMappingComponent: { [name in IconNames]: SVGComponent } = {
  ['custom-sparkling-fill']: Icons.CustomSparklingFill,
  ['custom-sparkling-line']: Icons.CustomSparklingLine,
  ['ri-account-circle-fill']: Icons.RiAccountCircleFill,
  ['ri-account-circle-line']: Icons.RiAccountCircleLine,
  ['ri-add-circle-fill']: Icons.RiAddCircleFill,
  ['ri-add-circle-line']: Icons.RiAddCircleLine,
  ['ri-add']: Icons.RiAdd,
  ['ri-alarm-warning-fill']: Icons.RiAlarmWarningFill,
  ['ri-alarm-warning-line']: Icons.RiAlarmWarningLine,
  ['ri-arrow-down-fill']: Icons.RiArrowDownFill,
  ['ri-arrow-down-line']: Icons.RiArrowDownLine,
  ['ri-arrow-go-back-fill']: Icons.RiArrowGoBackFill,
  ['ri-arrow-go-back-line']: Icons.RiArrowGoBackLine,
  ['ri-arrow-go-forward-fill']: Icons.RiArrowGoForwardFill,
  ['ri-arrow-go-forward-line']: Icons.RiArrowGoForwardLine,
  ['ri-arrow-left-fill']: Icons.RiArrowLeftFill,
  ['ri-arrow-left-line']: Icons.RiArrowLeftLine,
  ['ri-arrow-left-right-fill']: Icons.RiArrowLeftRightFill,
  ['ri-arrow-left-right-line']: Icons.RiArrowLeftRightLine,
  ['ri-arrow-m-down-fill']: Icons.RiArrowMDownFill,
  ['ri-arrow-m-down-line']: Icons.RiArrowMDownLine,
  ['ri-arrow-m-left-fill']: Icons.RiArrowMLeftFill,
  ['ri-arrow-m-left-line']: Icons.RiArrowMLeftLine,
  ['ri-arrow-m-right-fill']: Icons.RiArrowMRightFill,
  ['ri-arrow-m-right-line']: Icons.RiArrowMRightLine,
  ['ri-arrow-m-up-fill']: Icons.RiArrowMUpFill,
  ['ri-arrow-m-up-line']: Icons.RiArrowMUpLine,
  ['ri-arrow-right-fill']: Icons.RiArrowRightFill,
  ['ri-arrow-right-line']: Icons.RiArrowRightLine,
  ['ri-arrow-up-down-fill']: Icons.RiArrowUpDownFill,
  ['ri-arrow-up-down-line']: Icons.RiArrowUpDownLine,
  ['ri-arrow-up-fill']: Icons.RiArrowUpFill,
  ['ri-arrow-up-line']: Icons.RiArrowUpLine,
  ['ri-arrow-xs-down-fill']: Icons.RiArrowXsDownFill,
  ['ri-arrow-xs-up-fill']: Icons.RiArrowXsUpFill,
  ['ri-bookmark-fill']: Icons.RiBookmarkFill,
  ['ri-bookmark-line']: Icons.RiBookmarkLine,
  ['ri-briefcase-fill']: Icons.RiBriefcaseFill,
  ['ri-briefcase-line']: Icons.RiBriefcaseLine,
  ['ri-building-line']: Icons.RiBuildingLine,
  ['ri-building-fill']: Icons.RiBuildingFill,
  ['ri-calendar-event-fill']: Icons.RiCalendarEventFill,
  ['ri-calendar-event-line']: Icons.RiCalendarEventLine,
  ['ri-calendar-fill']: Icons.RiCalendarFill,
  ['ri-calendar-line']: Icons.RiCalendarLine,
  ['ri-calendar-check-line']: Icons.RiCalendarCheckLine,
  ['ri-calendar-check-fill']: Icons.RiCalendarCheckFill,
  ['ri-check']: Icons.RiCheck,
  ['ri-checkbox-circle-fill']: Icons.RiCheckboxCircleFill,
  ['ri-checkbox-fill']: Icons.RiCheckboxFill,
  ['ri-checkbox-indeterminate-fill']: Icons.RiCheckboxIndeterminateFill,
  ['ri-checkbox-indeterminate-line']: Icons.RiCheckboxIndeterminateLine,
  ['ri-checkbox-line']: Icons.RiCheckboxLine,
  ['ri-close-circle-fill']: Icons.RiCloseCircleFill,
  ['ri-close-circle-line']: Icons.RiCloseCircleLine,
  ['ri-close']: Icons.RiClose,
  ['ri-coins-line']: Icons.RiCoinsLine,
  ['ri-contract-left-line']: Icons.RiContractLeftLine,
  ['ri-delete-bin-fill']: Icons.RiDeleteBinFill,
  ['ri-delete-bin-line']: Icons.RiDeleteBinLine,
  ['ri-download-line']: Icons.RiDownloadLine,
  ['ri-equalizer-line']: Icons.RiEqualizerLine,
  ['ri-error-warning-fill']: Icons.RiErrorWarningFill,
  ['ri-error-warning-line']: Icons.RiErrorWarningLine,
  ['ri-expand-right-line']: Icons.RiExpandRightLine,
  ['ri-external-link-line']: Icons.RiExternalLinkLine,
  ['ri-eye-fill']: Icons.RiEyeFill,
  ['ri-eye-line']: Icons.RiEyeLine,
  ['ri-eye-off-fill']: Icons.RiEyeOffFill,
  ['ri-eye-off-line']: Icons.RiEyeOffLine,
  ['ri-facebook-circle-fill']: Icons.RiFacebookCircleFill,
  ['ri-facebook-circle-line']: Icons.RiFacebookCircleLine,
  ['ri-file-download-line']: Icons.RiFileDownloadLine,
  ['ri-file-fill']: Icons.RiFileFill,
  ['ri-file-line']: Icons.RiFileLine,
  ['ri-file-list3-fill']: Icons.RiFileList3Fill,
  ['ri-folder-user-fill']: Icons.RiFolderUserFill,
  ['ri-group2-fill']: Icons.RiGroup2Fill,
  ['ri-information-fill']: Icons.RiInformationFill,
  ['ri-information-line']: Icons.RiInformationLine,
  ['ri-instagram-line']: Icons.RiInstagramLine,
  ['ri-linkedin-fill']: Icons.RiLinkedinFill,
  ['ri-linkedIn-line']: Icons.RiLinkedInLine,
  ['ri-loader']: Icons.RiLoader,
  ['ri-logout-circle-line']: Icons.RiLogoutCircleLine,
  ['ri-mail-line']: Icons.RiMailLine,
  ['ri-mail-send-fill']: Icons.RiMailSendFill,
  ['ri-more']: Icons.RiMore,
  ['ri-map-fill']: Icons.RiMapFill,
  ['ri-map-line']: Icons.RiMapLine,
  ['ri-message-fill']: Icons.RiMessageFill,
  ['ri-message-line']: Icons.RiMessageLine,
  ['ri-menu-line']: Icons.RiMenuLine,
  ['ri-minus']: Icons.RiMinus,
  ['ri-pencil-fill']: Icons.RiPencilFill,
  ['ri-pencil-line']: Icons.RiPencilLine,
  ['ri-question-fill']: Icons.RiQuestionFill,
  ['ri-question-line']: Icons.RiQuestionLine,
  ['ri-reply-fill']: Icons.RiReplyFill,
  ['ri-reply-line']: Icons.RiReplyLine,
  ['ri-search']: Icons.RiSearch,
  ['ri-send-plane-fill']: Icons.RiSendPlaneFill,
  ['ri-send-plane-line']: Icons.RiSendPlaneLine,
  ['ri-settings-fill']: Icons.RiSettingsFill,
  ['ri-settings-line']: Icons.RiSettingsLine,
  ['ri-shield-check']: Icons.RiShieldCheck,
  ['ri-suitcase3-line']: Icons.RiSuitcase3Line,
  ['ri-suitcase3-fill']: Icons.RiSuitcase3Fill,
  ['ri-tiktok-line']: Icons.RiTiktokLine,
  ['ri-timer3-fill']: Icons.RiTimer3Fill,
  ['ri-timer3-line']: Icons.RiTimer3Line,
  ['ri-twitter-line']: Icons.RiTwitterLine,
  ['ri-upload-fill']: Icons.RiUploadFill,
  ['ri-upload-line']: Icons.RiUploadLine,
  ['ri-user5-line']: Icons.RiUser5Line,
  ['ri-user5-fill']: Icons.RiUser5Fill,
  ['ri-sparkling2-line']: Icons.RiSparkling2Line,
  ['ri-sparkling2-fill']: Icons.RiSparkling2Fill,
  ['ri-money-dollar-circle-fill']: Icons.RiMoneyDollarCircleFill,
  ['ri-money-dollar-circle-line']: Icons.RiMoneyDollarCircleLine,
  ['ri-shining2-line']: Icons.RiShining2Line,
  ['ri-shining2-fill']: Icons.RiShining2Fill,
  ['ri-infinity']: Icons.RiInfinity,
  ['ri-discuss-fill']: Icons.RiDiscussFill,
  ['ri-discuss-line']: Icons.RiDiscussLine,
  ['ri-file-copy2-line']: Icons.RiFileCopy2Line,
  ['ri-checkbox-circle-line']: Icons.RiCheckboxCircleLine,
  ['ri-attachment-fill']: Icons.RiAttachmentFill,
  ['ri-attachment-line']: Icons.RiAttachmentLine,
  ['ri-chat-quote-fill']: Icons.RiChatQuoteFill,
  ['ri-chat-quote-line']: Icons.RiChatQuoteLine,
  ['ri-contacts-fill']: Icons.RiContactsFill,
  ['ri-contacts-line']: Icons.RiContactsLine,
  ['ri-file-list-fill']: Icons.RiFileListFill,
  ['ri-file-list-line']: Icons.RiFileListLine,
  ['ri-graduation-fill']: Icons.RiGraduationFill,
  ['ri-graduation-line']: Icons.RiGraduationLine,
  ['ri-group-fill']: Icons.RiGroupFill,
  ['ri-group-line']: Icons.RiGroupLine,
  ['ri-phone-fill']: Icons.RiPhoneFill,
  ['ri-phone-line']: Icons.RiPhoneLine,
  ['ri-survey-fill']: Icons.RiSurveyFill,
  ['ri-survey-line']: Icons.RiSurveyLine,
  ['ri-hand-coin-fill']: Icons.RiHandCoinFill,
  ['ri-hand-coin-line']: Icons.RiHandCoinLine,
  ['ri-lock-fill']: Icons.RiLockFill,
  ['ri-lock-line']: Icons.RiLockLine,
  ['ri-flashlight-fill']: Icons.RiFlashlightFill,
  ['ri-flashlight-line']: Icons.RiFlashlightLine,
};
