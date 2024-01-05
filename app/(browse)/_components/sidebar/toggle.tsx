'use client';

import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { Hint } from '@/components/hint';
import { useSidebar } from '@/store/use-sidebar';
import { Button } from '@/components/ui/button';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

export const Toggle = () => {
  const matches = useMediaQuery('(max-width: 1024px)');
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? 'Expand' : 'Collapse';

  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} className="h-auto p-2 " variant="ghost">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="hidden lg:flex p-3 pl-6 mb-2 items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              className="h-auto p-2 ml-auto"
              variant="ghost"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};
