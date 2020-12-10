using System;

namespace Evercraft.Core
{
    public class Character
    {
        #region Constants
        public const string DEFAULT_NAME = "No Name";
        public const Alignment DEFAULT_ALIGNMENT = Alignment.Neutral;
        public const int BASE_AC = 10;
        public const int BASE_HITPOINTS = 5;
        #endregion

        public string Name { get; set; } = DEFAULT_NAME;
        public Alignment Alignment { get; set; } = DEFAULT_ALIGNMENT;
        public int ArmorClass { get => BASE_AC; }
        public int HitPoints { get => BASE_HITPOINTS; }

        public bool Attack(int roll, Character target) => roll >= target.ArmorClass || roll == 20;


    }
}
