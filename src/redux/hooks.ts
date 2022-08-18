import { useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;