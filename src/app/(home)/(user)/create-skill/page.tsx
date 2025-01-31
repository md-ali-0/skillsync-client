
import CreateSkillForm from "@/components/skill/create-skill-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

const CreateBrand: FC = () => {
    return (
        <div>
            <div className="rounded-xl border bg-white dark:bg-gray-900">
                <div className="flex justify-between items-center border-b px-7 py-4">
                    <h3 className="font-medium text-black dark:text-white">
                        Create Skill
                    </h3>
                    <Button asChild variant={'default'} size={'sm'}>
                        <Link href={"/skills"}>Manage Skills</Link>
                    </Button>
                </div>
                <div className="p-7">
                    <CreateSkillForm />
                </div>
            </div>
        </div>
    );
}

export default CreateBrand;