using System;

namespace Evercraft.Core
{
    public class Character
    {
        private const string DEFAULT_NAME = "No Name";
        private const Alignment DEFAULT_ALIGNMENT = Alignment.Neutral;
        private const int BASE_AC = 10;

        public string Name { get; set; } = DEFAULT_NAME;
        public Alignment Alignment { get; set; } = DEFAULT_ALIGNMENT;
    }
}
