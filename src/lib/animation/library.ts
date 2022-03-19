import { Animation, Animations, AnimationEasings } from '../../types';

export const FadeIn: Animation = {
  name: Animations.FadeIn,
  from: {
    visibility: {
      opacity: 0,
    },
  },
  to: {
    visibility: {
      opacity: 1,
    },
  },
};

export const FadeOut: Animation = {
  name: Animations.FadeOut,
  from: {
    visibility: {
      opacity: 1,
    },
  },
  to: {
    visibility: {
      opacity: 0,
    },
  },
};

export const SlideDown: Animation = {
  name: Animations.SlideDown,
  from: {
    transform: {
      translate: {
        y: '-100%',
      },
    },
  },
  to: {
    transform: {
      translate: {
        y: 0,
      },
    },
  },
};

export const SlideLeft: Animation = {
  name: Animations.SlideLeft,
  from: {
    transform: {
      translate: {
        x: '-100%',
      },
    },
  },
  to: {
    transform: {
      translate: {
        x: 0,
      },
    },
  },
};

export const SlideRight: Animation = {
  name: Animations.SlideRight,
  from: {
    transform: {
      translate: {
        x: '100%',
      },
    },
  },

  to: {
    transform: {
      translate: {
        x: 0,
      },
    },
  },
};
