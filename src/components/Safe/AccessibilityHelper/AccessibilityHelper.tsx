import styled from "styled-components";

import { useAppSelector } from "../../../utils/redux";

export const ERRORED_SPEECH_TEXT = "The code you have entered is invalid.";
export const LOCKED_SPEECH_TEXT = "The safe is currently locked.";
export const UNLOCKED_SPEECH_TEXT = "The safe is currently unlocked.";

const AnnounceableText = styled.div`
  height: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  top: 0;
  width: 0;
`;

/**
 * This component provides audio feedback whenever the state of the safe updates,
 * helping us provide additional context to visitors using a screen reader.
 */
const AccessibilityHelper = () => {
  const error = useAppSelector((state) => state.safe.error);
  const locked = useAppSelector((state) => state.safe.locked);

  return (
    <AnnounceableText role="alert">
      {(() => {
        if (error) return ERRORED_SPEECH_TEXT;
        if (locked) return LOCKED_SPEECH_TEXT;
        return UNLOCKED_SPEECH_TEXT;
      })()}
    </AnnounceableText>
  );
};

export default AccessibilityHelper;
