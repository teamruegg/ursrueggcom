

const DEFAULT_ACCENT = '#E36159';
const DEFAULT_SUBTLE = '#383F34'; // With contrast 4.5:1 to white
const PADDING_REGULAR = 10;

// Add styleOptions to customize Web Chat canvas
// https://github.com/microsoft/BotFramework-WebChat/blob/main/packages/api/src/defaultStyleOptions.ts
const styleOptions = {

    // Basic styling
    accent: DEFAULT_ACCENT,
    backgroundColor: 'lightgray',
    subtle: DEFAULT_SUBTLE,
    paddingRegular: PADDING_REGULAR,
    paddingWide: PADDING_REGULAR * 2,
    fontSizeSmall: '80%',
    // monospaceFont: fontFamily(['Consolas', 'Courier New', 'monospace']),
    // primaryFont: fontFamily(['Calibri', 'Helvetica Neue', 'Arial', 'sans-serif']),

    // Root
    rootHeight: '100%',
    rootWidth: '50%',
    rootZIndex: 0, // "z-index" for the root container of Web Chat. This will form a new stacking context so "z-index" used in children won't pollute.

    transitionDuration: '0s',

    // Avatar
    avatarBorderRadius: '50%',
    avatarSize: 40,
    botAvatarBackgroundColor: '#2BAAB1',
    botAvatarImage: 'img/icons/robot.svg',
    botAvatarInitials: '',
    // userAvatarBackgroundColor: undefined,
    userAvatarImage: 'img/icons/person-fill.svg',
    userAvatarInitials: '',
    // showAvatarInGroup: 'status',

    // Bubble
    bubbleBackground: 'White',
    bubbleBorderColor: '#E6E6E6',
    bubbleBorderRadius: 2,
    bubbleBorderStyle: 'solid',
    bubbleBorderWidth: 1,
    bubbleFromUserBackground: 'DarkGrey',
    bubbleFromUserBorderColor: '#E6E6E6',
    bubbleFromUserBorderRadius: 2,
    bubbleFromUserBorderStyle: 'solid',
    bubbleFromUserBorderWidth: 1,
    // bubbleFromUserNubOffset: 0,
    // bubbleFromUserNubSize: undefined,
    bubbleFromUserTextColor: 'Black',
    // bubbleImageHeight: 240,
    // bubbleMaxWidth: 480, // Based off screen width = 600px
    // bubbleMinHeight: 40,
    // bubbleMinWidth: 250, // min screen width = 300px; Microsoft Edge requires 372px (https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13621468/)
    // bubbleNubOffset: 0,
    // bubbleNubSize: undefined,
    // bubbleTextColor: 'Black',
    // messageActivityWordBreak: 'break-word',

    // Connectivity UI
    // connectivityIconPadding: PADDING_REGULAR * 1.2,
    // connectivityMarginLeftRight: PADDING_REGULAR * 1.4,
    // connectivityMarginTopBottom: PADDING_REGULAR * 0.8,
    // connectivityTextSize: '75%',
    // failedConnectivity: '#C50F1F',
    // slowConnectivity: '#EAA300',
    // notificationText: '#5E5E5E',
    // slowConnectionAfter: 15000,

    // Emoji
    emojiSet: true,

    // Live region - Accessibility
    // internalLiveRegionFadeAfter: 1000,

    // Markdown
    // markdownExternalLinkIconImage:
    //     'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIzIDMgMTggMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMjUwMSA0LjUwMDE3SDEwLjc0OTVDMTEuMTYzNyA0LjUwMDE3IDExLjQ5OTUgNC44MzU5NiAxMS40OTk1IDUuMjUwMTdDMTEuNDk5NSA1LjYyOTg2IDExLjIxNzMgNS45NDM2NiAxMC44NTEzIDUuOTkzMzJMMTAuNzQ5NSA2LjAwMDE3SDcuMjQ5NzRDNi4wNzA3OSA1Ljk5OTYxIDUuMTAzNDkgNi45MDY1NiA1LjAwNzg2IDguMDYxMTJMNS4wMDAyOCA4LjIyMDAzTDUuMDAzMTIgMTYuNzUwN0M1LjAwMzQzIDE3Ljk0MTUgNS45Mjg4NSAxOC45MTYxIDcuMDk5NjYgMTguOTk0OUw3LjI1MzcxIDE5LjAwMDFMMTUuNzUxOCAxOC45ODg0QzE2Ljk0MTUgMTguOTg2OCAxNy45MTQ1IDE4LjA2MiAxNy45OTM1IDE2Ljg5MjNMMTcuOTk4NyAxNi43Mzg0VjEzLjIzMjFDMTcuOTk4NyAxMi44MTc5IDE4LjMzNDUgMTIuNDgyMSAxOC43NDg3IDEyLjQ4MjFDMTkuMTI4NCAxMi40ODIxIDE5LjQ0MjIgMTIuNzY0MyAxOS40OTE4IDEzLjEzMDNMMTkuNDk4NyAxMy4yMzIxVjE2LjczODRDMTkuNDk4NyAxOC43NDA3IDE3LjkyOTMgMjAuMzc2OSAxNS45NTI4IDIwLjQ4MjlMMTUuNzUzOCAyMC40ODg0TDcuMjU4MjcgMjAuNTAwMUw3LjA1NDk1IDIwLjQ5NDlDNS4xNDIzOSAyMC4zOTU0IDMuNjA4OTUgMTguODYyNyAzLjUwODM3IDE2Ljk1MDJMMy41MDMxMiAxNi43NTExTDMuNTAwODkgOC4yNTI3TDMuNTA1MjkgOC4wNTAyQzMuNjA1MzkgNi4xMzc0OSA1LjEzODY3IDQuNjA0NDkgNy4wNTA5NiA0LjUwNTI3TDcuMjUwMSA0LjUwMDE3SDEwLjc0OTVINy4yNTAxWk0xMy43NDgxIDMuMDAxNDZMMjAuMzAxOCAzLjAwMTk3TDIwLjQwMTQgMy4wMTU3NUwyMC41MDIyIDMuMDQzOTNMMjAuNTU5IDMuMDY4MDNDMjAuNjEyMiAzLjA5MTIyIDIwLjY2MzQgMy4xMjE2MyAyMC43MTExIDMuMTU4ODVMMjAuNzgwNCAzLjIyMTU2TDIwLjg2NDEgMy4zMjAxNEwyMC45MTgzIDMuNDEwMjVMMjAuOTU3IDMuNTAwNTdMMjAuOTc2MiAzLjU2NDc2TDIwLjk4OTggMy42Mjg2MkwyMC45OTkyIDMuNzIyODJMMjAuOTk5NyAxMC4yNTU0QzIwLjk5OTcgMTAuNjY5NiAyMC42NjM5IDExLjAwNTQgMjAuMjQ5NyAxMS4wMDU0QzE5Ljg3IDExLjAwNTQgMTkuNTU2MiAxMC43MjMyIDE5LjUwNjUgMTAuMzU3MUwxOS40OTk3IDEwLjI1NTRMMTkuNDk4OSA1LjU2MTQ3TDEyLjI3OTcgMTIuNzg0N0MxMi4wMTM0IDEzLjA1MSAxMS41OTY4IDEzLjA3NTMgMTEuMzAzMSAxMi44NTc1TDExLjIxOSAxMi43ODQ5QzEwLjk1MjcgMTIuNTE4NyAxMC45Mjg0IDEyLjEwMjEgMTEuMTQ2MiAxMS44MDg0TDExLjIxODggMTEuNzI0M0wxOC40MzY5IDQuNTAxNDZIMTMuNzQ4MUMxMy4zNjg0IDQuNTAxNDYgMTMuMDU0NiA0LjIxOTMxIDEzLjAwNSAzLjg1MzI0TDEyLjk5ODEgMy43NTE0NkMxMi45OTgxIDMuMzcxNzcgMTMuMjgwMyAzLjA1Nzk3IDEzLjY0NjQgMy4wMDgzMUwxMy43NDgxIDMuMDAxNDZaIiBmaWxsPSIjMjEyMTIxIiAvPjwvc3ZnPg==)',
    // markdownRespectCRLF: true,

    // Scroll behavior
    // hideScrollToEndButton: undefined, // Deprecated as of 4.14.0. Use "scrollToEndButtonBehavior" instead. Remove on or after 2023-06-02.
    // autoScrollSnapOnActivity: false,
    // autoScrollSnapOnActivityOffset: 0,
    // autoScrollSnapOnPage: false,
    // autoScrollSnapOnPageOffset: 0, // TODO: Rename from "autoScrollSnapOnPageoffset".

    // Send box
    hideSendBox: false,
    hideUploadButton: false,
    // microphoneButtonColortrueOnDictate: '#F33',
    // sendBoxBackground: 'White',

    // Send box buttons
    // sendBoxButtonColor: undefined,
    // sendBoxButtonShadeColor: undefined,

    // sendBoxButtonColorOnActive: undefined,
    // sendBoxButtonShadeColorOnActive: '#EDEBE9',

    // sendBoxButtonColorOnDisabled: '#A19F9D',
    // sendBoxButtonShadeColorOnDisabled: '#F3F2F1',

    // sendBoxButtonColorOnFocus: undefined,
    // sendBoxButtonShadeColorOnFocus: undefined,

    // sendBoxButtonColorOnHover: undefined,
    // sendBoxButtonShadeColorOnHover: '#F3F2F1',

    // sendBoxButtonShadeBorderRadius: 2,
    // sendBoxButtonShadeInset: 2,

    // sendBoxButtonKeyboardFocusIndicatorBorderColor: '#605E5C',
    // sendBoxButtonKeyboardFocusIndicatorBorderRadius: 0,
    // sendBoxButtonKeyboardFocusIndicatorBorderStyle: 'solid',
    // sendBoxButtonKeyboardFocusIndicatorBorderWidth: 1,
    // sendBoxButtonKeyboardFocusIndicatorInset: 4,

    // sendBoxDisabledTextColor: undefined,
    // sendBoxHeight: 40,
    // sendBoxMaxHeight: 200,
    // sendBoxTextColor: 'Black',
    // sendBoxBorderBottom: undefined,
    // sendBoxBorderLeft: undefined,
    // sendBoxBorderRight: undefined,
    // sendBoxBorderTop: 'solid 1px #E6E6E6',
    // sendBoxPlaceholderColor: undefined,
    // sendBoxTextWrap: false,
    // sendBoxButtonAlignment: 'stretch',

    // Visually show spoken text
    // showSpokenText: false,

    // spinnerAnimationBackgroundImage: undefined,
    // spinnerAnimationHeight: 16,
    // spinnerAnimationWidth: 16,
    // spinnerAnimationPadding: 12,

    // Suggested actions
    // suggestedActionBorderRadius: 0,
    // suggestedActionHeight: 40,
    // suggestedActionImageHeight: 20,
    // suggestedActionLayout: 'carousel',

    // suggestedActionBackgroundColor: 'White',
    // suggestedActionBorderColor: undefined,
    // suggestedActionBorderStyle: 'solid',
    // suggestedActionBorderWidth: 2,
    // suggestedActionTextColor: undefined,

    // suggestedActionBackgroundColorOnActive: '#EDEBE9',
    // suggestedActionBorderColorOnActive: undefined,
    // suggestedActionBorderStyleOnActive: undefined,
    // suggestedActionBorderWidthOnActive: undefined,
    // suggestedActionTextColorOnActive: undefined,

    // suggestedActionBackgroundColorOnDisabled: undefined,
    // suggestedActionBorderColorOnDisabled: '#E6E6E6',
    // suggestedActionBorderStyleOnDisabled: undefined,
    // suggestedActionBorderWidthOnDisabled: undefined,
    // suggestedActionTextColorOnDisabled: undefined,

    // suggestedActionBackgroundColorOnFocus: undefined,
    // suggestedActionBorderColorOnFocus: undefined,
    // suggestedActionBorderStyleOnFocus: undefined,
    // suggestedActionBorderWidthOnFocus: undefined,
    // suggestedActionTextColorOnFocus: undefined,

    // suggestedActionBackgroundColorOnHover: '#F3F2F1',
    // suggestedActionBorderColorOnHover: undefined,
    // suggestedActionBorderStyleOnHover: undefined,
    // suggestedActionBorderWidthOnHover: undefined,
    // suggestedActionTextColorOnHover: undefined,

    // suggestedActionKeyboardFocusIndicatorBorderColor: '#605E5C',
    // suggestedActionKeyboardFocusIndicatorBorderRadius: 0,
    // suggestedActionKeyboardFocusIndicatorBorderStyle: 'dashed',
    // suggestedActionKeyboardFocusIndicatorBorderWidth: 1,
    // suggestedActionKeyboardFocusIndicatorInset: 2,

    // Suggested actions carousel layout
    // suggestedActionsCarouselFlipperCursor: undefined,
    // suggestedActionsCarouselFlipperBoxWidth: 40,
    // suggestedActionsCarouselFlipperSize: 20,

    // Suggested actions flow layout
    // suggestedActionsFlowMaxHeight: undefined,

    // Suggested actions stacked layout
    // suggestedActionsStackedHeight: undefined,
    // suggestedActionsStackedOverflow: undefined,
    // suggestedActionsStackedLayoutButtonMaxHeight: undefined,
    // suggestedActionsStackedLayoutButtonTextWrap: false,

    // suggestedActionsVisualKeyboardIndicatorColor: 'Black',
    // suggestedActionsVisualKeyboardIndicatorStyle: 'solid',
    // suggestedActionsVisualKeyboardIndicatorWidth: 2,

    // Timestamp
    // groupTimestamp: true,
    // sendTimeout: 20000,
    // sendTimeoutForAttachments: 120000,
    // timestampColor: undefined,
    // timestampFormat: 'relative',

    // Transcript overlay buttons
    // scrollToEndButtonBehavior: 'unread',
    // scrollToEndButtonFontSize: '85%',
    // transcriptOverlayButtonBackground: 'rgba(0, 0, 0, .6)',
    // transcriptOverlayButtonBackgroundOnDisabled: 'rgba(0, 0, 0, .6)',
    // transcriptOverlayButtonBackgroundOnFocus: 'rgba(0, 0, 0, .8)',
    // transcriptOverlayButtonBackgroundOnHover: 'rgba(0, 0, 0, .8)',
    // transcriptOverlayButtonColor: 'White',
    // transcriptOverlayButtonColorOnDisabled: 'White',
    // transcriptOverlayButtonColorOnFocus: undefined,
    // transcriptOverlayButtonColorOnHover: undefined,

    // Toast UI

    // notificationDebounceTimeout: 400,

    // hideToaster: false,
    // toasterHeight: 32,
    // toasterMaxHeight: 32 * 5,
    // toasterSingularMaxHeight: 50,
    // toastFontSize: '87.5%',
    // toastIconWidth: 36,
    // toastSeparatorColor: '#E8EAEC',
    // toastTextPadding: 6,

    // toastErrorBackgroundColor: '#FDE7E9',
    // toastErrorColor: '#A80000',
    // toastInfoBackgroundColor: '#CEF1FF',
    // toastInfoColor: '#105E7D',
    // toastSuccessBackgroundColor: '#DFF6DD',
    // toastSuccessColor: '#107C10',
    // toastWarnBackgroundColor: '#FFF4CE',
    // toastWarnColor: '#3B3A39',

    // Transcript
    // transcriptTerminatorBackgroundColor: '#595959',
    // transcriptTerminatorBorderRadius: 5,
    // transcriptTerminatorColor: 'White',
    // transcriptTerminatorFontSize: 12,

    // transcriptActivityVisualKeyboardIndicatorColor: DEFAULT_SUBTLE,
    // transcriptActivityVisualKeyboardIndicatorStyle: 'dashed',
    // transcriptActivityVisualKeyboardIndicatorWidth: 1,

    // transcriptVisualKeyboardIndicatorColor: 'Black',
    // transcriptVisualKeyboardIndicatorStyle: 'solid',
    // transcriptVisualKeyboardIndicatorWidth: 2,

    // Typing animation
    // typingAnimationBackgroundImage: undefined,
    // typingAnimationDuration: 5000,
    // typingAnimationHeight: 20,
    // typingAnimationWidth: 64,

    // Upload thumbnail
    // enableUploadThumbnail: true,
    // uploadThumbnailContentType: 'image/jpeg',
    // uploadThumbnailHeight: 360,
    // uploadThumbnailQuality: 0.6,
    // uploadThumbnailWidth: 720,

    // Video
    // videoHeight: 270 // based on bubbleMaxWidth: 480 / 16 * 9 = 270

 };

 // Add your BOT ID below 
    var BOT_ID = "03c6cc36-84a2-4a2d-a8ee-2dbbe41a352d"; 
    var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + BOT_ID;
    var powervaEndPointURL = "https://b1020df7f348423f9bd67f8bb5112e.b3.environment.api.powerplatform.com/powervirtualagents/bots/24068313-2486-4818-a887-e9474326e439/directline/token?api-version=2022-03-01-preview"

fetch(powervaEndPointURL)
     .then(response => response.json())
     .then(conversationInfo => {
         window.WebChat.renderWebChat(
             {
                 directLine: window.WebChat.createDirectLine({
                     token: conversationInfo.token,
                 }),
                 styleOptions
             },
             document.getElementById('webchat')
         );
     })
     .catch(err => console.error("An error occurred: " + err));