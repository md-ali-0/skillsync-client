import ManageSkills from "@/components/skill/manage-skills-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Skills() {
    return (
        <div className="rounded-xl border bg-white">
            <div className="flex justify-between items-center border-b px-7 py-4">
                <h3 className="font-medium text-black dark:text-white">
                    My Skills
                </h3>
                <Button asChild variant={"default"} size={"sm"}>
                    <Link href={"/create-skill"}>Create Skill</Link>
                </Button>
            </div>
            <div className="p-5">
                <ManageSkills />
            </div>
        </div>
    );
}
