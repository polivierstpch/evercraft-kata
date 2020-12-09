using System;

namespace Evercraft.Core
{
    public class Character
    {
        public const string DEFAULT_NAME = "No Name";
        public const Alignment DEFAULT_ALIGNMENT = Alignment.Neutral;
        public const int BASE_AC = 10;

        public string Name { get; set; } = DEFAULT_NAME;
        public Alignment Alignment { get; set; } = DEFAULT_ALIGNMENT;
        public int ArmorClass { get => BASE_AC; }
    }
}
